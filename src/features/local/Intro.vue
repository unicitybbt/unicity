<script setup>
import { ImageComponent } from '@/components/image';
import introBg from '@images/local/intro/bg.jpg';
</script>

<template>
  <div class="intro-container">
    <h2 class="section-title">삿포로 (SAPPORO)</h2>

    <ImageComponent :src="introBg" alt="삿포로 이미지" class="local-image mb40" />

    <div class="info-grid">
      <div class="info-card">
        <h3 class="info-card-title">🕐 한국과의 시차</h3>
        <p>한국과 동일합니다.<br /><small>(예. 한국: 오전 10시 / 일본: 오전 10시)</small></p>
      </div>

      <div class="info-card">
        <h3 class="info-card-title">🌤️ 지역 날씨</h3>
        <p>삿포로의 4월은 초봄~초겨울 사이 체감으로, <strong>일교차가 큰 편</strong>입니다. 평균 최고 기온 약  <strong>10~13°C</strong>, 평균 최저 기온 약 <strong>2~5°C</strong> 수준이며, 바람이 불면 체감온도가 더 낮을 수 있습니다.</p>
      </div>

      <div class="info-card">
        <h3 class="info-card-title">👕 옷차림</h3>
        <p><strong>낮</strong>: 긴팔 티/셔츠 + 얇은 니트 또는 가벼운 자켓</p>
        <p><strong>저녁</strong>: 기온이 떨어지므로 얇은 긴소매 옷을 입거나, 반팔 티에 가디건,  바람막이 등 가벼운 외투를 챙기시기 바랍니다.</p>
      </div>

      <div class="info-card">
        <h3 class="info-card-title">💰 화폐</h3>
        <p>일본 화폐인 <strong>엔화(JPY)</strong>를 사용합니다.</p>
        <p>카드 결제가 매우 보편적이지만, 일부 소규모 식당·시장·간식/노점은 현금이 필요할 수 있어 <strong>소액 현금을 준비하시는 것을 추천</strong>드립니다.</p>
      </div>

      <div class="info-card">
        <h3 class="info-card-title">⚡ 전압</h3>
        <p>일본 전압은 <strong>100V, 50Hz</strong>이며, 한국(220V)과 달라 돼지코 형태(일본/미국형 플러그) 어댑터가 필요합니다.</p>
      </div>

      <div class="info-card">
        <h3 class="info-card-title">📋 여권/VISA</h3>
        <p>여권은 유효기간이 충분히 남아 있어야 하며, 원활한 출입국을 위해 6개월 이상 잔여를 권장합니다.</p>
        <p>대한민국 여권 소지자는 관광 목적으로 최대 <strong>90일간 무비자 체류</strong>가 가능합니다.</p>
      </div>

      <div class="info-card warning">
        <h3 class="info-card-title">⚠️ 주의 사항</h3>
        <ul>
          <li>일본은 전반적으로 치안이 안전한 편이나, 관광지/번화가에서는 소지품 분실·도난에 유의하시기 바랍니다.</li>
          <li>4월에도 기온이 낮고 비/바람이 있을 수 있어 체온 관리에 유의해 주세요.</li>
          <li>도로 횡단 시 신호 준수, 자전거/차량 통행에 주의 바랍니다.</li>
          <li>※ (온천 이용 시) 문신, 타투, 입장 규정은 시설별로 다를 수 있으니 안내를 따르시기 바랍니다.</li>
        </ul>
      </div>
    </div>
  </div>
</template>