<script setup>
import ImageComponent from '@/components/image/ImageComponent.vue';
import img1 from '@images/main/img1.jpg';
import icKakao from '@images/ic-kakao.png';
</script>

<template>
  <div class="page-common main-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="h-dimm" style="background-color: rgba(0, 0, 0, 0.2); z-index: 1;"></div>
      <div class="hero-section-bg-obj obj1"></div>
      <div class="hero-section-bg-obj obj2"></div>
      <div class="hero-section-bg-obj obj3"></div>
      <div class="h-container" style="z-index: 2;">
        <div class="h-row">
          <div class="h-col h-col-12">
            <h1 class="hero-title">2026 UNICITY INTERNATIONAL<br />BIOS LIFE LEADERSHIP TRIP<br />IN SAPPORO</h1>
            <p class="hero-description">
              유니시티의 사장님들과 함께 잊지 못할 순간을 만들기 위해 다채로운 프로그램과 행사를 준비했습니다.<br />
              여행 일정과 프로그램을 확인하시고 자연과 미식,<br />
              그리고 여유가 공존하는 홋카이도에서 리더 여러분들을 위한 특별한 힐링 여행이 시작 됩니다!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule Overview Section -->
    <section class="section schedule-overview-section">
      <div class="h-container">
        <div class="h-row">
          <div class="h-col h-col-12">
            <h2 class="section-title">일정 안내</h2>
          </div>
        </div>
        <div class="h-row">
          <div class="h-col h-col-12">
            <div class="box-wrap">
              <h3 class="box-title">여행 개요</h3>
              <p class="box-content">
                2026 UNICITY INTERNATIONAL BIOS LIFE LEADERSHIP TRIP IN SAPPORO
              </p>
            </div>
          </div>
          <div class="h-col h-col-12">
            <div class="box-wrap">
              <h3 class="box-title">행사 기간</h3>
              <p class="box-content">
                1차 : 4월13일(월) ~ 4월 17일(토)<br />
                2차 : 4월17일(금) ~ 4월 21일(화)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- dresscode Section -->
    <section class="section dresscode-section">
      <div class="h-container">
        <div class="h-row">
          <div class="h-col h-col-12">
            <h2 class="section-title">만찬 드레스코드 안내</h2>
          </div>
        </div>
        <div class="h-row">
          <div class="h-col h-col-12 h-col-md-9">
            <div class="box-wrap ">
              <h3 class="box-title">DRESS CODE:PINK</h3>
              <p class="box-content">
                4월 삿포로에서 함께하는 만찬의 드레스 코드는 <strong>핑크(Pink)</strong> 입니다.<br />
                우리 모두가 만들어내는 ‘핑크빛 벚꽃의 물결’로 특별한 밤을 완성해 주시기 바랍니다.
              </p>
            </div>
          </div>
          <div class="h-col h-col-12 h-col-md-3">
            <ImageComponent :src="img1" :aspect-ratio="'auto'" />
          </div>
        </div>
      </div>
    </section>

    <!-- Passport Section -->
    <section class="section passport-section">
      <div class="h-container">
        <div class="h-row">
          <div class="h-col h-col-12">
            <h2 class="section-title">여권 안내</h2>
          </div>
        </div>
        <div class="h-row">
          <div class="h-col h-col-12">
            <div class="box-wrap">
              <h3 class="box-title">여권 유효기간</h3>
              <p class="box-content">
                일본 입국 시, 출국일 기준 여권의 유효기간이 <strong>6개월 이상</strong> 남아 있어야 합니다.
              </p>
            </div>
          </div>
          <div class="h-col h-col-12">
            <div class="box-wrap">
              <h3 class="box-title">여권 발급</h3>
              <p class="box-content">
                여권 기간이 만료되었거나 신규 발급을 해야 할 경우,<br />
                아래 서류를 지참하여 가까운 여권 접수처(전국 여권 사무 대행 기관 및 제외 공간)에 가셔서 발급 받으시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
        <div class="h-row">
          <div class="h-col h-col-12">
            <div class="box-wrap">
              <h4 class="box-title">기본 구비 서류 (만18세 이상 신청인의 여권 재발급)</h4>
              <ul class="list-check mb20">
                <li>여권발급신청서</li>
                <li>여권용 사진 1매 (6개월 이내에 촬영한 사진)</li>
                <li>신분증</li>
                <li>병역관계 서류 (병역 대상자의 경우 추가 서류 확인 필요)</li>
                <li>기존 여권 (유효기간이 남아 있는 경우)</li>
              </ul>
              <p class="box-note mb5">
                <strong>발급 소요기간</strong> : 약 1주일 (각 발급처마다 소요기간이 상이함)
              </p>
              <p class="box-link">
                ※ 여권 발급 관련 자세한 내용은 <a href="https://www.passport.go.kr" target="_blank" rel="noopener">외교부 여권 안내 홈페이지</a> 참고 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Documents Section -->
    <section class="section documents-section">
      <div class="h-container">
        <div class="h-row">
          <div class="h-col h-col-12">
            <h2 class="section-title">출국 준비서류</h2>
          </div>
        </div>
        <div class="h-row">
          <div class="h-col h-col-12">
            <div class="box-wrap">
              <h3 class="box-title">준비서류</h3>
              <p class="box-content">
                여권 (6개월 이상 유효)<br />
                * 외국 여권 소지자는 여행사에 별도 문의 요망
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section contact-section">
      <div class="h-container">
        <div class="h-row">
          <div class="h-col h-col-12">
            <h2 class="section-title">담당자 안내</h2>
          </div>
        </div>
        <div class="h-row">
          <div class="h-col h-col-12">
            <div class="box-wrap">
              <h3 class="box-title">비욘드비즈니스트래블즈</h3>
              <p class="box-content">
                담당자 연락 가능 시간 : 10:00 ~ 17:00<br />
                대표번호 : 02-3210-2888
              </p>
            </div>
            <div class="box-wrap box-kakao">
              <a href="http://pf.kakao.com/_xoxkMxon" class="box-content" target="_blank">
                <img :src="icKakao" alt="카카오톡" class="icon-kakao" />
                카카오톡에서 <strong>유니시티 리더십트립 삿포로</strong>를 친구추가 하세요.
              </a>
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
.main-page {
  // Hero Section
  .hero-section {
    .hero-section-bg-obj {
      position: absolute;
      top: 0;
      left: 0;
      aspect-ratio: 1 / 1;
      background-image: url('@images/ic-sun.svg');
      background-size: cover;
      background-position: 0 0;
      background-repeat: no-repeat;
      animation: spin 30s linear infinite;
      &.obj1 {
        top: -70%;
        left: 0;
        width: 450px;
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
          left: 4%;
          width: 700px;
        }
        &.obj2 {
          top: 58%;
          left: 0;
          width: 400px;
        }
        &.obj3 {
          top: 30%;
          left: 80%;
          width: 500px;
        }
      }
    }
  }
}
</style>
