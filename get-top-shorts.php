<?php
header('Content-Type: application/json; charset=UTF-8');
error_reporting(E_ALL);
ini_set('display_errors', 1);

$apiKey = 'AIzaSyAiJqKRTrZnO2psKukJP35oVa2smy3FxWE';
$channelHandle = 'SannatanKriya';

function apiGetJson($url, $apiKey) {
    $fullUrl = $url . (str_contains($url, '?') ? '&' : '?') . 'key=' . urlencode($apiKey);

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $fullUrl,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 20,
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    return [
        'httpCode' => $httpCode,
        'curlError' => $curlError,
        'raw' => $response,
        'json' => json_decode($response, true)
    ];
}

function isoDurationToSeconds($duration) {
    try {
        $interval = new DateInterval($duration);
        return ($interval->d * 86400) + ($interval->h * 3600) + ($interval->i * 60) + $interval->s;
    } catch (Exception $e) {
        return 0;
    }
}

$channelUrl = 'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=' . urlencode($channelHandle);
$channelData = apiGetJson($channelUrl, $apiKey);

if (
    !$channelData['json'] ||
    empty($channelData['json']['items'][0]['contentDetails']['relatedPlaylists']['uploads'])
) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Could not fetch uploads playlist.',
        'httpCode' => $channelData['httpCode'],
        'curlError' => $channelData['curlError'],
        'response' => $channelData['json'],
        'raw' => $channelData['raw']
    ], JSON_PRETTY_PRINT);
    exit;
}

$uploadsPlaylistId = $channelData['json']['items'][0]['contentDetails']['relatedPlaylists']['uploads'];

$playlistUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId='
    . urlencode($uploadsPlaylistId)
    . '&maxResults=50';

$playlistData = apiGetJson($playlistUrl, $apiKey);

if (!$playlistData['json'] || empty($playlistData['json']['items'])) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Could not fetch playlist videos.',
        'httpCode' => $playlistData['httpCode'],
        'curlError' => $playlistData['curlError'],
        'response' => $playlistData['json'],
        'raw' => $playlistData['raw']
    ], JSON_PRETTY_PRINT);
    exit;
}

$videoIds = [];
foreach ($playlistData['json']['items'] as $item) {
    if (!empty($item['contentDetails']['videoId'])) {
        $videoIds[] = $item['contentDetails']['videoId'];
    }
}

if (empty($videoIds)) {
    echo json_encode([]);
    exit;
}

$videosUrl = 'https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id='
    . urlencode(implode(',', $videoIds));

$videosData = apiGetJson($videosUrl, $apiKey);

if (!$videosData['json'] || empty($videosData['json']['items'])) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Could not fetch video details.',
        'httpCode' => $videosData['httpCode'],
        'curlError' => $videosData['curlError'],
        'response' => $videosData['json'],
        'raw' => $videosData['raw']
    ], JSON_PRETTY_PRINT);
    exit;
}

$shorts = [];

foreach ($videosData['json']['items'] as $video) {
    $id = $video['id'] ?? '';
    $title = $video['snippet']['title'] ?? 'Untitled';
    $description = trim($video['snippet']['description'] ?? '');
    $viewCount = isset($video['statistics']['viewCount']) ? (int)$video['statistics']['viewCount'] : 0;
    $duration = $video['contentDetails']['duration'] ?? 'PT0S';
    $seconds = isoDurationToSeconds($duration);

    if ($seconds <= 60) {
        $thumbnail = $video['snippet']['thumbnails']['high']['url']
            ?? "https://img.youtube.com/vi/{$id}/hqdefault.jpg";

        $shorts[] = [
            'id' => $id,
            'title' => $title,
            'description' => mb_substr($description, 0, 140),
            'views' => $viewCount,
            'thumbnail' => $thumbnail,
            'link' => 'https://www.youtube.com/shorts/' . $id
        ];
    }
}

usort($shorts, function ($a, $b) {
    return $b['views'] <=> $a['views'];
});

$topShorts = array_slice($shorts, 0, 10);

echo json_encode($topShorts, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);