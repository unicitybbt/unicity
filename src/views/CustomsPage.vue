<script setup>
</script>

<template>
  <div class="page-common customs-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="h-dimm" style="background-color: rgba(0, 0, 0, 0.2); z-index: 1;"></div>
      <div class="hero-section-bg-obj obj1"></div>
      <div class="hero-section-bg-obj obj2"></div>
      <div class="hero-section-bg-obj obj3"></div>
      <div class="h-container" style="z-index: 2;">
        <div class="h-row">
          <div class="h-col h-col-12">
            <h1 class="hero-title">설렘 가득한 삿포로 여정을 위해<br />입국 절차와 세관 정보를 사전에 안내드립니다.</h1>
            <!-- <p class="hero-description">일본 삿포로 입국 시 필요한 정보를 확인하세요</p> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Immigration Section -->
    <section class="section immigration-section">
      <div class="h-container">
        <div class="h-row">
          <div class="h-col h-col-12">
            <h2 class="section-title">입국 안내</h2>
          </div>
        </div>
        <div class="h-row">
          <div class="h-col h-col-12">
            <div class="box-wrap">
              <h3 class="box-title">여권 (6개월 이상 유효)</h3>
              <div class="box-content">* 외국 여권 소지자는 여행사에 별도 문의 요망</div>
            </div>

            <div class="box-wrap">
              <h3 class="box-title-strong">신치토세 국제공항 입국 시, 입국∙세관 신고서 작성 필요</h3>

              <div class="list-group">
                <h4 class="box-title">1. Visit Japan Web이란?</h4>
                <div class="box-content mb20">
                  일본 입국 전 입국심사·세관신고·검역 정보를 온라인으로 미리 등록하여, 입국 시 QR코드 스캔만으로 빠르게 입국 절차를 진행할 수 있는 시스템입니다.
                </div>
              </div>

              <div class="list-group">
                <h4 class="box-title">2. 사전 등록 방법</h4>
                <div class="box-content">
                  접속 사이트: Visit Japan Web
                </div>
                <ul class="list-dot">
                  <li>URL: <a href="https://services.digital.go.jp/ko/visit-japan-web/" target="_blank">Visit Japan Web | Digital Agency Services</a><br /></li>
                  <li>시점: 일본 출국 전 사전 등록 권장</li>
                </ul>
              </div>

              <div class="list-group">
                <h4 class="box-title">3. 사전 입력 시 필요한 정보</h4>
                <div class="box-content">
                  여권 정보
                </div>
                <ul class="list-dot">
                  <li>호텔정보 : <strong>SAPPORO GRAND HOTEL</strong></li>
                </ul>
                <div class="box-content">
                  항공편명
                </div>
                <ul class="list-dot">
                  <li>대한항공 출국편 <strong>KE 765</strong>, 귀국편 <strong>KE766</strong></li>
                  <li>아시아나 출국편 <strong>OZ174</strong>, 귀국편 <strong>OZ173</strong></li>
                </ul>
              </div>
            </div>

            <div class="box-wrap">
              <h3 class="box-title">귀국 항공편</h3>
              <ul class="list-dot">
                <li>입국 심사 시, 귀국 항공편에 대한 증빙을 요구할 수 있습니다.</li>
                <li>공항 미팅 시, 나눠드리는 여행 파우치에서 꺼내 제출해 주세요.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Customs Section -->
    <section class="section customs-section">
      <div class="h-container">
        <div class="h-row">
          <div class="h-col h-col-12">
            <h2 class="section-title">세관 안내</h2>
          </div>
        </div>

        <!-- Tax Free Items -->
        <div class="h-row">
          <div class="h-col h-col-12">
            <div class="box-wrap">
              <h3 class="box-title-strong">면세 통과 대상</h3>

              <div class="list-group">
                <h4 class="box-title">1) 휴대품</h4>
                <ul class="list-dot">
                  <li>여행 목적에 맞는 합리적 수준에 한함</li>
                  <li>주류, 담배를 제외하고 여행자가 휴대한 품목들의 총 가액이 <strong>20만엔(한화 약 200만원)</strong> 이하일 경우 면세 통관</li>
                </ul>
              </div>

              <div class="list-group">
                <h4 class="box-title">2) 주류</h4>
                <ul class="list-dot">
                  <li>주류 3병 미만 1병당 <strong>약 760ML</strong></li>
                </ul>
              </div>

              <div class="list-group">
                <h4 class="box-title">3) 담배</h4>
                <ul class="list-dot">
                  <li>궐연 (Cigarette) : <strong>200개비</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Declaration Items -->
        <div class="h-row">
          <div class="h-col h-col-12">
            <div class="box-wrap">
              <h3 class="box-title-strong">세관 신고 등 대상</h3>

              <div class="list-group">
                <h4 class="box-title">1) 귀금속</h4>
                <ul class="list-dot">
                  <li>금제품 반입 심사가 강화되어 고가 금제품은 한국에 보관하고 오시길 권장함</li>
                  <li>금제품(반지, 팔찌, 목걸이 등)을 <strong>신고하지 않고 반입</strong>할 시, 일본 관세법상 허위신고로 <strong>처벌 및 물품 압수 등이 될 수 있음</strong></li>
                  <li>순도 90% 이상의 금 또는 금제품의 <strong>중량이 1kg을 초과하는 경우</strong>에는 세관에<strong>「지불수단 등의 휴대 수출・수입신고서」도 추가로 제출</strong> 필요</li>
                </ul>
              </div>

              <div class="list-group">
                <h4 class="box-title">2) 외국환 신고</h4>
                <ul class="list-dot">
                  <li>100만엔 초과액 휴대 반입하는 경우, 휴대물품 신고서에 휴대 금액을 기재하여 입국 세관에 신고 후 신고서에 직인 확인</li>
                </ul>
              </div>

              <div class="list-group">
                <h4 class="box-title">3) 반입금지 품목</h4>
                <ul class="list-dot">
                  <li>무기, 화약, 폭발물 (산업용 폭약 제외) 및 군사용 기술 장비</li>
                  <li>각종 폭죽 (해양 안전용 제외), 유해 화학물 등</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.customs-page {
  // Hero Section
  .hero-section {
    .hero-section-bg-obj {
      position: absolute;
      top: 0;
      left: 0;
      aspect-ratio: 1 / 1;
      background-image: url('@images/ic-triangle.svg');
      background-size: cover;
      background-position: 0 0;
      background-repeat: no-repeat;
      animation: spin 30s linear infinite;
      &.obj1 {
        top: -70%;
        left: 0;
        width: 350px;
      }
      &.obj2 {
        top: 70%;
        left: -20%;
        width: 200px;
      }
      &.obj3 {
        top: 30%;
        left: 80%;
        width: 300px;
      }
      @media (min-width: 768px) {
        &.obj1 {
          top: -68%;
          left: 80%;
          width: 500px;
        }
        &.obj2 {
          top: 58%;
          left: 75%;
          width: 250px;
        }
        &.obj3 {
          top: 30%;
          left: 0;
          width: 350px;
        }
      }
    }
  }
}

.list-group {
  .box-title {
    color: var(--common-font-colo-default);
  }
}
</style>
