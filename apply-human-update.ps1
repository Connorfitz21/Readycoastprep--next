$ErrorActionPreference = 'Stop'

$page = Join-Path $PSScriptRoot 'app\page.tsx'
if (!(Test-Path $page)) {
  throw "Run this from the Ready Coast Prep project root. app\page.tsx was not found."
}

$backup = "$page.before-four-pass-audit.bak"
Copy-Item $page $backup -Force
$text = Get-Content $page -Raw

# ------------------------------------------------------------
# 1. HUMAN CLICK PATH
# One clear navigation hierarchy and one clear first action.
# ------------------------------------------------------------

$nav = @'
<nav className="hidden items-center gap-6 text-sm font-semibold text-slate-300 lg:flex" aria-label="Primary navigation">
  <a href="#readiness-tool" className="hover:text-white">Readiness</a>
  <a href="/preparedness-plan" className="hover:text-white">My Plan</a>
  <a href="/guides" className="hover:text-white">Guides</a>
  <a href="#trusted-resources" className="hover:text-white">Official Alerts</a>
  <a href="/about" className="hover:text-white">About</a>
</nav>
'@

$text = [regex]::Replace(
  $text,
  '<nav\b[^>]*aria-label="Primary navigation"[^>]*>.*?</nav>',
  $nav,
  [System.Text.RegularExpressions.RegexOptions]::Singleline
)

# Hero language: explain the product and the next step immediately.
$replacements = [ordered]@{
  'HOUSEHOLD PREPAREDNESS' = 'READY COAST PREP'
  'Prepare today. Protect tomorrow.' = 'How prepared is your household?'
  'Build a household emergency plan, identify critical gaps, and improve your readiness one action at a time.' = 'Check the basics that matter, see your biggest gaps, and build a practical household plan you can print and keep.'
  'Start household setup' = 'Check my readiness'
  'Update household setup' = 'Review my readiness'
  'View inventory' = 'Review supplies'
  'Build my action plan' = 'Build my plan'
  'Complete setup to calculate' = 'Complete the readiness check'
  'PRACTICAL RESOURCES' = 'FEATURED GUIDES'
  'Build readiness beyond the score' = 'Start with the essentials'
  'CONNECTED HOUSEHOLD PLAN' = 'YOUR HOUSEHOLD PLAN'
  'Turn your score and guides into one prioritized plan' = 'Turn your readiness check into a plan'
  'Create my preparedness plan' = 'Build my plan'
  'TRUSTED OFFICIAL SOURCES' = 'OFFICIAL ALERTS & SOURCES'
  'Live forecasts, warnings, and planning tools' = 'Check current warnings and official guidance'
  'PRIORITIES' = 'NEXT ACTIONS'
  'Your highest-impact actions' = 'What to work on next'
  'SCORE' = 'READINESS SCORE'
  'Where your score comes from' = 'What is affecting your score'
  'HOUSEHOLD INVENTORY' = 'YOUR SUPPLIES'
  'Current supplies' = 'What you have on hand'
}

foreach ($pair in $replacements.GetEnumerator()) {
  $text = $text.Replace($pair.Key, $pair.Value)
}

# Add a short trust strip immediately after the hero CTA row if it is not present.
if ($text -notmatch 'Private on this device') {
  $trust = @'
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <span>Private on this device</span>
              <span>No account required</span>
              <span>Official-source guidance</span>
              <span>Printable plans</span>
            </div>
'@

  # Insert after the first hero button group.
  $heroButtonPattern = '(<div className="mt-8 flex flex-wrap gap-3">.*?</div>)'
  $text = [regex]::Replace(
    $text,
    $heroButtonPattern,
    ('$1' + "`r`n" + $trust),
    [System.Text.RegularExpressions.RegexOptions]::Singleline
  )
}

# ------------------------------------------------------------
# 2. VISUAL / HUMAN DESIGN
# Reduce equal-weight card overload and make the page read like a
# preparedness resource, not a generic SaaS feature catalogue.
# ------------------------------------------------------------

# Make the readiness score supportive rather than visually dominating the hero.
$text = $text.Replace(
  'className="flex h-52 w-52 flex-col items-center justify-center rounded-full border-[14px] border-slate-800 bg-slate-900"',
  'className="flex h-44 w-44 flex-col items-center justify-center rounded-full border-[10px] border-slate-800 bg-slate-900/70"'
)
$text = $text.Replace('className="text-5xl font-black"', 'className="text-4xl font-black"')

# Replace the large guide-card wall on the homepage with three featured
# destinations and a single route to the complete guide library.
$featured = @'
        <section id="resources" className="mt-14 scroll-mt-24 border-t border-slate-800 pt-10">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm font-semibold text-amber-400">Featured guides</p>
              <h2 className="mt-2 text-3xl font-black">Start with the essentials</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                These are the guides most households need first. The full library covers evacuation, communications, pets, renters, heat, cold, and other situations.
              </p>
            </div>
            <a
              href="/guides"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-sky-500 hover:text-white"
            >
              Browse all guides
            </a>
          </div>

          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            <a
              href="/emergency-water-storage"
              className="group border-t-2 border-sky-500 bg-slate-900/45 p-6 transition hover:bg-slate-900"
            >
              <p className="text-sm font-semibold text-sky-400">Water</p>
              <h3 className="mt-2 text-xl font-bold group-hover:text-sky-300">How much water should you actually store?</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Calculate your household target, choose safe containers, and store water so it is usable when you need it.
              </p>
              <p className="mt-5 font-semibold text-slate-200">Open the water guide →</p>
            </a>

            <a
              href="/power-outage-checklist"
              className="group border-t-2 border-amber-400 bg-slate-900/45 p-6 transition hover:bg-slate-900"
            >
              <p className="text-sm font-semibold text-amber-400">Power</p>
              <h3 className="mt-2 text-xl font-bold group-hover:text-amber-300">What changes as an outage gets longer?</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Food safety, charging, generators, medical needs, cold, heat, and the point when staying home may stop being safe.
              </p>
              <p className="mt-5 font-semibold text-slate-200">Open the outage checklist →</p>
            </a>

            <a
              href="/hurricane-preparedness-checklist"
              className="group border-t-2 border-slate-500 bg-slate-900/45 p-6 transition hover:bg-slate-900"
            >
              <p className="text-sm font-semibold text-slate-300">Storms</p>
              <h3 className="mt-2 text-xl font-bold group-hover:text-white">What should be done before a hurricane arrives?</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Work through a phased checklist for supplies, home protection, evacuation, communications, and post-storm safety.
              </p>
              <p className="mt-5 font-semibold text-slate-200">Open the hurricane checklist →</p>
            </a>
          </div>
        </section>
'@

$text = [regex]::Replace(
  $text,
  '<section id="resources".*?</section>',
  $featured,
  [System.Text.RegularExpressions.RegexOptions]::Singleline
)

# Flatten the connected-plan panel slightly so every section is not another
# heavily rounded "feature card".
$text = $text.Replace(
  'className="mt-12 rounded-3xl border border-sky-500/40 bg-gradient-to-br from-sky-950 to-slate-900 p-6 sm:p-8"',
  'className="mt-14 border-y border-sky-500/30 bg-sky-950/25 px-1 py-9 sm:px-6"'
)

# Reduce visual noise in the official-resource section.
$text = $text.Replace(
  'className="mt-12 scroll-mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8"',
  'className="mt-14 scroll-mt-24 border-t border-slate-800 pt-10"'
)

# ------------------------------------------------------------
# 3. EDITORIAL / "AI FEEL" PASS
# Remove generic explanatory language and repeated marketing constructions.
# ------------------------------------------------------------

$editorial = [ordered]@{
  'Use these planning guides to turn your household baseline into concrete actions for coastal storms, power outages, evacuation, communications, pet safety, renter constraints, and long-term recovery.' = 'Use the full guide library when you need a specific checklist, worksheet, or hazard plan.'
  'Ready Coast Prep can use your locally saved household setup, housing type, pets, medical needs, hazards, and current supplies to recommend the right next actions and guide pages. Print the finished plan and keep it with your emergency records.' = 'Your locally saved household information can be turned into a short list of next actions. Print the finished plan and keep it with your emergency records.'
  'Ready Coast Prep helps you organize your household. These official agencies remain the authoritative sources for active warnings, evacuation information, and federal preparedness guidance.' = 'For active warnings, evacuation orders, shelter information, and official forecasts, use the responsible agency directly.'
  'External links open official government or nonprofit resources in a new tab.' = 'Use official sources for changing conditions and emergency instructions.'
}

foreach ($pair in $editorial.GetEnumerator()) {
  $text = $text.Replace($pair.Key, $pair.Value)
}

# ------------------------------------------------------------
# 4. SEO SUPPORT
# The guide-page metadata, canonicals, sitemap and www redirect are supplied
# as files in this package. The homepage patch adds a clean /guides route
# into the primary navigation and featured-guide structure.
# ------------------------------------------------------------

Set-Content -Path $page -Value $text -Encoding utf8

Write-Host ""
Write-Host "Four-pass homepage update applied."
Write-Host "Backup created at app\page.tsx.before-four-pass-audit.bak"
Write-Host "Test locally before committing."

# ------------------------------------------------------------
# 5. SITE-WIDE BEHAVIOR MEASUREMENT
# Add a small GA4 event listener if the site already exposes gtag.
# No new analytics vendor or ID is introduced here.
# ------------------------------------------------------------
$layout = Join-Path $PSScriptRoot 'app\layout.tsx'
if (Test-Path $layout) {
  $layoutText = Get-Content $layout -Raw
  if ($layoutText -notmatch 'SiteAnalytics') {
    $layoutText = "import SiteAnalytics from `"./components/SiteAnalytics`";`r`n" + $layoutText
    $layoutText = [regex]::Replace(
      $layoutText,
      '(</body>)',
      '        <SiteAnalytics />' + "`r`n" + '$1',
      [System.Text.RegularExpressions.RegexOptions]::Singleline
    )
    Set-Content -Path $layout -Value $layoutText -Encoding utf8
    Write-Host "Site-wide behavior event listener added to app\layout.tsx"
  }
}

# Add the standout tools to the homepage featured-resource copy without creating
# another wall of cards. They remain primarily discoverable through /guides.
$pageText = Get-Content $page -Raw
if ($pageText -notmatch '/preparedness-pack') {
  $toolStrip = @'
        <section className="mt-12 border-y border-slate-800 py-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold text-sky-300">Free household tools</p>
              <h2 className="mt-2 text-2xl font-black">Turn the guidance into a plan you can use</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-400">Calculate a water target, plan emergency meals, or print one household preparedness sheet for the fridge, go-bag, or emergency records.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="/emergency-water-calculator" className="rounded-xl border border-slate-700 px-4 py-3 text-sm font-bold hover:border-sky-500">Water calculator</a>
              <a href="/emergency-food-planner" className="rounded-xl border border-slate-700 px-4 py-3 text-sm font-bold hover:border-amber-400">Food planner</a>
              <a href="/preparedness-pack" className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-black text-slate-950 hover:bg-white">Printable pack</a>
            </div>
          </div>
        </section>
'@
  $pageText = [regex]::Replace(
    $pageText,
    '(<section id="resources")',
    ($toolStrip + "`r`n" + '$1'),
    [System.Text.RegularExpressions.RegexOptions]::Singleline
  )
  Set-Content -Path $page -Value $pageText -Encoding utf8
  Write-Host "Homepage tool strip added."
}
