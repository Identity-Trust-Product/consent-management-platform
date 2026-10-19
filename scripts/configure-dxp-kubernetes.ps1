# Run from a machine with kubectl access to the CMS cluster.
# Reads only DXP_INTEGRATION_KEY from the local CMS .env; never uploads the whole file.
[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [string]$Deployment,
    [string]$Namespace = 'default',
    [string]$SecretName = 'dxp-integration',
    [string]$EnvFile = (Join-Path $PSScriptRoot '../.env')
)

$ErrorActionPreference = 'Stop'
Get-Command kubectl -ErrorAction Stop | Out-Null

$integrationKey = [Environment]::GetEnvironmentVariable('DXP_INTEGRATION_KEY')
if ([string]::IsNullOrWhiteSpace($integrationKey) -and (Test-Path -LiteralPath $EnvFile)) {
    foreach ($line in [System.IO.File]::ReadAllLines((Resolve-Path -LiteralPath $EnvFile).Path)) {
        if ($line -match '^\s*DXP_INTEGRATION_KEY\s*=\s*(.*?)\s*$') {
            $integrationKey = $Matches[1].Trim().Trim([char[]]@('"', "'"))
        }
    }
}
if ([string]::IsNullOrWhiteSpace($integrationKey)) {
    throw 'Set DXP_INTEGRATION_KEY in the CMS .env or this process environment first.'
}

# Check the target before making changes. Never print the key or Secret manifest.
kubectl -n $Namespace get deployment $Deployment -o name
if ($LASTEXITCODE -ne 0) { throw 'CMS deployment was not found; check the cluster, namespace and name.' }

$secret = @{
    apiVersion = 'v1'
    kind = 'Secret'
    metadata = @{ name = $SecretName; namespace = $Namespace }
    type = 'Opaque'
    data = @{ DXP_INTEGRATION_KEY = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($integrationKey)) }
}
$secret | ConvertTo-Json -Depth 5 -Compress | kubectl apply -f -
if ($LASTEXITCODE -ne 0) { throw 'Could not configure the DXP integration Secret.' }

kubectl -n $Namespace set env "deployment/$Deployment" "--from=secret/$SecretName"
if ($LASTEXITCODE -ne 0) { throw 'Could not attach the DXP Secret to the CMS deployment.' }

# Restart also when the Secret value changed but its reference stayed the same.
kubectl -n $Namespace rollout restart "deployment/$Deployment"
if ($LASTEXITCODE -ne 0) { throw 'Could not restart the CMS deployment.' }
kubectl -n $Namespace rollout status "deployment/$Deployment" --timeout=120s
if ($LASTEXITCODE -ne 0) { throw 'CMS rollout did not complete; inspect the deployment and pod logs.' }

Write-Host 'DXP integration key configured and CMS restarted.'
