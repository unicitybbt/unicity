<script setup>
import { ref } from 'vue';
import { SwiperComponent } from '@/components/swiper';
import r1_1 from '@images/local/recommends2/r1-1.png';
import r1_2 from '@images/local/recommends2/r1-2.png';
import r1_3 from '@images/local/recommends2/r1-3.png';
import r2_1 from '@images/local/recommends2/r2-1.png';
import r2_2 from '@images/local/recommends2/r2-2.png';
import r3_1 from '@images/local/recommends2/r3-1.jpeg';
import r3_2 from '@images/local/recommends2/r3-2.png';
import r4 from '@images/local/recommends2/r4.png';

const r1Data = ref([{ title: 'slide1', image: r1_1 },{ title: 'slide2', image: r1_2 },{ title: 'slide3', image: r1_3 }]);
const r2Data = ref([{ title: 'slide1', image: r2_1 },{ title: 'slide2', image: r2_2 }]);
const r3Data = ref([{ title: 'slide1', image: r3_1 },{ title: 'slide2', image: r3_2 }]);
const r4Data = ref([{ title: 'slide1', image: r4 }]);
</script>
<template>
  <div class="recommends-container">
    <h2 class="section-title">현지 추천 쇼핑몰</h2>

    <div class="shop-grid mb40">
      <div class="shop-card">
        <div class="shop-label">잡화점</div>
        <SwiperComponent :items="r1Data" />
        <h4 class="shop-name">메가 돈키호테 삿포로 다누키코지 본점</h4>
        <ul class="shop-info">
          <li>
            <div class="op-name">주요상품</div>
            <div class="op-value">식료품, 장난감, 기타 생활용품</div>
          </li>
          <li>
            <div class="op-name">운영시간</div>
            <div class="op-value">10:00 ~ 익일 05:00</div>
          </li>
          <li>
            <div class="op-name">비 고</div>
            <div class="op-value">TAX-FREE 구매 가능</div>
          </li>
          <li>
            <div class="op-name">위치</div>
            <div class="op-value"><a href="https://maps.app.goo.gl/FXRm5mtkfbG9Lx4r9" target="_blank" class="btn-link">구글맵 바로가기</a></div>
          </li>
        </ul>
      </div>

      <div class="shop-card">
        <div class="shop-label">잡화점</div>
        <SwiperComponent :items="r2Data" />
        <h4 class="shop-name">돈키호테 스스키노점</h4>
        <ul class="shop-info">
          <li>
            <div class="op-name">주요상품</div>
            <div class="op-value">식료품, 장난감, 기타 생활용품</div>
          </li>
          <li>
            <div class="op-name">운영시간</div>
            <div class="op-value">24시간 영업</div>
          </li>
          <li>
            <div class="op-name">비 고</div>
            <div class="op-value">TAX-FREE 구매 가능, 스테디셀러 1층 위치</div>
          </li>
          <li>
            <div class="op-name">위치</div>
            <div class="op-value"><a href="https://maps.app.goo.gl/n2yrD7NaeFoALhru7" target="_blank" class="btn-link">구글맵 바로가기</a></div>
          </li>
        </ul>
      </div>

      <div class="shop-card">
        <div class="shop-label">상업지구</div>
        <SwiperComponent :items="r3Data" />
        <h4 class="shop-name">다누키코지 상점가</h4>
        <ul class="shop-info">
          <li>
            <div class="op-name">주요상품</div>
            <div class="op-value">약 200개 상점이 늘어선 오래된 쇼핑가</div>
          </li>
          <li>
            <div class="op-name">운영시간</div>
            <div class="op-value">
              10:00~
              <div class="kick">*상점 별 영업시간 상이</div>
            </div>
          </li>
          <li>
            <div class="op-name">비 고</div>
            <div class="op-value">-</div>
          </li>
          <li>
            <div class="op-name">위치</div>
            <div class="op-value"><a href="https://maps.app.goo.gl/Bx8LiSM6XTgsou1H9" target="_blank" class="btn-link">구글맵 바로가기</a></div>
          </li>
        </ul>
      </div>

      <div class="shop-card">
        <div class="shop-label">의류판매점</div>
        <SwiperComponent :items="r4Data" />
        <h4 class="shop-name">BEAMS SAPPORO</h4>
        <ul class="shop-info">
          <li>
            <div class="op-name">주요상품</div>
            <div class="op-value">
              BEAMS 자체 옷 / 각종 타사 의류, 유명 패션 셀렉트 스토어
            </div>
          </li>
          <li>
            <div class="op-name">운영시간</div>
            <div class="op-value">11:00 ~ 20:00</div>
          </li>
          <li>
            <div class="op-name">비 고</div>
            <div class="op-value">1층 여성복, 2층 남성복 / 면세 가능</div>
          </li>
          <li>
            <div class="op-name">위치</div>
            <div class="op-value"><a href="https://maps.app.goo.gl/QkG8uX2dAdhWyZXM9" target="_blank" class="btn-link">구글맵 바로가기</a></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.shop-notice {
  background: var(--common-bg-gradient-default);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin: 20px auto;
}

.notice-header {
  text-align: center;
  margin-bottom: 24px;

  .category-badge {
    display: inline-block;
    background: #f1f5f9;
    color: #64748b;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 12px;
  }

  .notice-title {
    font-size: 20px;
    font-weight: 800;
    color: #1e293b;
    line-height: 1.4;
    span {
      color: var(--common-font-color-highlight);
     } // 타베로그 브랜드 포인트 컬러 느낌
  }

  .alert-box {
    margin-top: 16px;
    background: #fff4ed;
    border: 1px solid #ea580c;
    border-radius: 12px;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    p {
      font-size: 13px;
      color: #ea580c;
      margin: 0;
      text-align: left;
      font-weight: 500;
    }
  }
}

.notice-intro {
  font-size: 14px;
  color: #475569;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 30px;
}

.guide-steps {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;

  .step-box {
    display: flex;
    gap: 16px;
    background: #f8fafc;
    padding: 16px;
    border-radius: 16px;
    border: 1px solid #f1f5f9;

    .step-num {
      font-size: 20px;
      font-weight: 900;
      color: #cbd5e1;
      font-style: italic;
    }

    .step-info {
      flex: 1;
      .step-label {
        font-size: 15px;
        font-weight: 700;
        color: #334155;
        margin-bottom: 4px;
      }
      .step-desc {
        font-size: 13px;
        color: #64748b;
        margin: 0;
        small { display: block; margin-top: 4px; color: #94a3b8; }
      }
      .link-btn {
        display: inline-block;
        margin-top: 8px;
        font-size: 13px;
        font-weight: 600;
        color: #ff6b00;
        text-decoration: none;
        .arrow { margin-left: 4px; }
      }
      .search-tips {
        margin-top: 8px;
        display: flex;
        gap: 6px;
        span {
          font-size: 11px;
          background: #e2e8f0;
          padding: 2px 8px;
          border-radius: 4px;
          color: #475569;
        }
      }
    }
  }
}

.tips-section {
  background: #f1f5f9;
  padding: 16px;
  border-radius: 12px;
  .tips-title {
    font-size: 14px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 8px;
  }
  .tips-list {
    margin: 0;
    padding-left: 18px;
    li {
      font-size: 13px;
      color: #475569;
      margin-bottom: 6px;
      line-height: 1.5;
      strong { color: #1e293b; }
    }
  }
}
</style>