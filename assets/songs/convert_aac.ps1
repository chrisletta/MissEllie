$bitrate = "96k"

Get-ChildItem -Filter *.aac | ForEach-Object {
    $input = $_.FullName
    $output = "$($_.DirectoryName)\$($_.BaseName)-compressed.aac"

    ffmpeg -i "$input" -c:a aac -b:a $bitrate "$output"
}
