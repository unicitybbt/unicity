<script setup>
import { ImageComponent } from '@/components/image';
import introBg from '@images/local/hotel/hotel-intro.jpg';
</script>

<template>
  <div class="hotel-container">
    <h2 class="section-title">삿포로 그랜드 호텔</h2>
    <!-- 호텔 맵 이미지 -->
    <ImageComponent :src="introBg" alt="삿포로 그랜드 호텔" class="hotel-image mb40" />

    <div class="info-section">
      <h3 class="section-title">주요 시설</h3>

      <div class="section-subtitle">본관</div>
      <div class="info-grid">
        <div class="info-card default">
          <div class="info-card-title">🍸 라운지&바: Lobby Mizar</div>
          <p><strong>위치</strong>: 본관 1층</p>
          <p><strong>운영 시간</strong>: 10:00 - 16:30</p>
        </div>
        <div class="info-card default">
          <div class="info-card-title">🍽️ 조식당: Garden Waraku</div>
          <p><strong>위치</strong>: 본관 4층</p>
          <p><strong>운영 시간</strong>: 07:00 - 10:00</p>
        </div>
        <div class="info-card default">
          <div class="info-card-title">🍸 라운지&바: Grand in Grand</div>
          <p><strong>위치</strong>: 본관 4층</p>
          <p><strong>운영 시간</strong>: 08:00 - 18:00</p>
        </div>
      </div>

      <div class="section-subtitle">동관</div>
      <div class="info-grid">
        <div class="info-card default">
          <div class="info-card-title">🍽️ 조식당: Norther Terrace</div>
          <p><strong>위치</strong>: 동관 1층</p>
          <p><strong>운영 시간</strong>: 06:30 - 10:00</p>
        </div>
        <div class="info-card default">
          <div class="info-card-title">🥐 베이커리 샵: Bakery & Pastry</div>
          <p><strong>위치</strong>: 동관 1층</p>
          <p><strong>운영 시간</strong>: 08:30 - 20:00</p>
        </div>
        <div class="info-card default">
          <div class="info-card-title">🍝 레스토랑: Chinese Kokaku(중국식)</div>
          <p><strong>위치</strong>: 동관 2층</p>
          <p><strong>운영 시간</strong>: 11:30 - 14:30 / 17:00 - 20:30</p>
        </div>
      </div>

      <div class="section-subtitle">별관</div>
      <div class="info-grid">
        <div class="info-card default">
          <div class="info-card-title">🍝 레스토랑: Northern Terrace(서양식)</div>
          <p><strong>위치</strong>: 별관 1층</p>
          <p><strong>운영 시간</strong>: 11:30 - 14:30 / 17:00 - 20:30</p>
        </div>
        <div class="info-card default">
          <div class="info-card-title">🍸 라운지&바: Old saloon</div>
          <p><strong>위치</strong>: 별관 1층</p>
          <p><strong>운영 시간</strong>: 17:00 - 22:30</p>
        </div>
      </div>
    </div>

    <div class="info-section">
      <h3 class="section-title">기타 정보</h3>
      <div class="info-list">
        <div class="info-item">
          <strong>안내 데스크</strong>: 안내데스크 : 1층 로비 / 운영시간 : 07:00 - 21:00
        </div>
      </div>

      <div class="alert-box warning">
        <p>
          <strong>※ 유의사항</strong>: 호텔 내에서는 환전 서비스를 제공하지 않습니다.<br />
          개별 비용은 한국에서 미리 환전하시는 것을 권장해드립니다.
        </p>
      </div>
    </div>
  </div>
</template>
