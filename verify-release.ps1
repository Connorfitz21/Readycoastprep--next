$ErrorActionPreference = 'Stop'
Write-Host "Ready Coast Prep release verification"
$required = @(
  'app\guides\page.tsx',
  'app\preparedness-pack\page.tsx',
  'app\emergency-water-calculator\page.tsx',
  'app\emergency-food-planner\page.tsx',
  'app\components\SiteAnalytics.tsx',
  'app\sitemap.ts'
)
foreach ($file in $required) {
  if (!(Test-Path $file)) { throw "Missing required file: $file" }
  Write-Host "OK  $file"
}
Write-Host "Running production build..."
npm run build
if ($LASTEXITCODE -ne 0) { throw "Production build failed." }
Write-Host "Build passed. Review the local site visually before committing."
