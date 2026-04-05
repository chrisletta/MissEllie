$bitrate = "96k"

Get-ChildItem -Filter *.m4a | ForEach-Object {
    $input = $_.FullName
    $output = "$($_.DirectoryName)\$($_.BaseName)-compressed.m4a"

    ffmpeg -i "$input" -c:a aac -b:a $bitrate "$output"
}
