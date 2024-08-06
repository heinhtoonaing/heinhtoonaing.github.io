function Start-Countdown {
    param(
        [int]$minutes
    )

    $endTime = (Get-Date).AddMinutes($minutes)
    
    Write-Host "Countdown started for $minutes minute(s)."
    
    while ($endTime -ge (Get-Date)) {
        $timeRemaining = $endTime - (Get-Date)
        $timeString = "{0:HH:mm:ss}" -f $timeRemaining
        Write-Host "Time remaining: $timeString" -NoNewline
        Start-Sleep -Seconds 1

        # Move cursor back to overwrite the previous line
        Write-Host "`r" -NoNewline
    }

    Write-Host "`nCountdown completed."
}


