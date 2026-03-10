<script setup>
import { ref } from 'vue';
import { SwiperComponent } from '@/components/swiper';
import q1_1 from '@images/local/recommends/q1-1.jpeg';
import q1_2 from '@images/local/recommends/q1-2.png';
import q1_3 from '@images/local/recommends/q1-3.png';
import q2_1 from '@images/local/recommends/q2-1.jpeg';
import q2_2 from '@images/local/recommends/q2-2.png';
import q3_1 from '@images/local/recommends/q3-1.jpeg';
import q3_2 from '@images/local/recommends/q3-2.png';
import q3_3 from '@images/local/recommends/q3-3.png';
import q4_1 from '@images/local/recommends/q4-1.jpeg';
import q4_2 from '@images/local/recommends/q4-2.png';
import q4_3 from '@images/local/recommends/q4-3.png';
import q5 from '@images/local/recommends/q5.jpeg';
import q6_1 from '@images/local/recommends/q6-1.png';
import q6_2 from '@images/local/recommends/q6-2.png';
import q6_3 from '@images/local/recommends/q6-3.png';
import q7_1 from '@images/local/recommends/q7-1.jpeg';
import q7_2 from '@images/local/recommends/q7-2.png';
import q8_1 from '@images/local/recommends/q8-1.jpeg';
import q8_2 from '@images/local/recommends/q8-2.png';
import q9_1 from '@images/local/recommends/q9-1.jpeg';
import q9_2 from '@images/local/recommends/q9-2.png';
import q9_3 from '@images/local/recommends/q9-3.png';
import q10_1 from '@images/local/recommends/q10-1.jpeg';
import q10_2 from '@images/local/recommends/q10-2.png';
import q10_3 from '@images/local/recommends/q10-3.png';
import q11_1 from '@images/local/recommends/q11-1.jpeg';
import q11_2 from '@images/local/recommends/q11-2.png';
import q11_3 from '@images/local/recommends/q11-3.png';
import q12_1 from '@images/local/recommends/q12-1.jpeg';
import q12_2 from '@images/local/recommends/q12-2.jpeg';

const q1Data = ref([{ title: 'slide1', image: q1_1 },{ title: 'slide2', image: q1_2 },{ title: 'slide3', image: q1_3 }]);
const q2Data = ref([{ title: 'slide1', image: q2_1 },{ title: 'slide2', image: q2_2 }]);
const q3Data = ref([{ title: 'slide1', image: q3_1 },{ title: 'slide2', image: q3_2 },{ title: 'slide3', image: q3_3 }]);
const q4Data = ref([{ title: 'slide1', image: q4_1 },{ title: 'slide2', image: q4_2 },{ title: 'slide3', image: q4_3 }]);
const q5Data = ref([{ title: 'slide1', image: q5 }]);
const q6Data = ref([{ title: 'slide1', image: q6_1 },{ title: 'slide2', image: q6_2 },{ title: 'slide3', image: q6_3 }]);
const q7Data = ref([{ title: 'slide1', image: q7_1 },{ title: 'slide2', image: q7_2 }]);
const q8Data = ref([{ title: 'slide1', image: q8_1 },{ title: 'slide2', image: q8_2 }]);
const q9Data = ref([{ title: 'slide1', image: q9_1 },{ title: 'slide2', image: q9_2 },{ title:' slide3',image :q9_3 }]);
const q10Data = ref([{ title:' slide1 ',image :q10_1},{title:' slide2 ',image :q10_2},{title:' slide3 ',image :q10_3}]);
const q11Data = ref([{ title:' slide1 ',image :q11_1},{title:' slide2 ',image :q11_2},{title:' slide3 ',image :q11_3}]);
const q12Data = ref([{ title:' slide1 ',image :q12_1},{title:' slide2 ',image :q12_2}]);

// const recommendedShops = ref([
//   {
//     name: 'Charcoal Grill and Sushi, Washoku ABURIYA Sohonten',
//     mainMenu: '사시미 모둠, 임연수어 구이',
//     hours: '17:00 ~ 22:00',
//     priceRange: '1,500엔',
//     priceRangeSub: '*메인 메뉴 기준',
//     images: [q1_1, q1_2, q1_3]
//   },
//   {
//     name: '새우라멘 이카쿠',
//     mainMenu: '새우 미소라멘',
//     hours: '[월,목~일] 11:00 ~ 익일 02:00\n[화] 17:00 ~ 23:00\n[수] 18:00 ~ 익일 01:00',
//     priceRange: '1,000엔~1,500엔',
//     images: [q2_1, q2_2]
//   },
//   {
//     name: '후쿠요시 스스키노 한가운데점',
//     mainMenu: '야키토리(닭꼬치), 모츠 소바',
//     hours: '[화-목] 18:00 ~ 익일 03:00\n[금-토] 17:00 ~ 익일 03:00\n[일] 17:00 ~ 23:15',
//     hoursSub: '*월요일 휴무, 상황에 따라 영업시간 변동 가능',
//     priceRange: '2,000엔 *메인 메뉴 기준',
//     images: [q3_1, q3_2, q3_3]
//   },
//   {
//     name: '매운라멘 카라이치 스스키노점',
//     mainMenu: '매운 간장 라멘, 매운 미소 라멘',
//     mainMenuSub: '*매운맛 조절 가능(6단계부터 추가금액 발생)',
//     hours: '[화~금, 일] 11:30 ~ 익일 05:00\n[일] 10:30 ~ 익일 05:00',
//     hoursSub: '*월요일 휴무, 상황에 따라 영업시간 변동 가능',

//     priceRange: '1,000엔~2,000엔',
//     images: [q4_1, q4_2, q4_3]
//   },
//   {
//     name: '잇큐',
//     mainMenu: '붓카케 우동',
//     hours: '[매일] 11:30 ~ 18:00',
//     hoursSub: '*상황에 따라 영업시간 변동 가능\n*재료 조기소진 가능',
//     priceRange: '1,000~2,000엔',
//     images: [q5]
//   },
//   {
//     name: '스키야키 젠',
//     mainMenu: '샤브샤브 / 스키야키 전문점',
//     hours: '[매일] 17:00 ~ 23:00',
//     priceRange: '5,000엔 ~6,000엔',
//     images: [q6_1, q6_2, q6_3]
//   },
// ]);
</script>
<template>
  <div class="recommends-container">
    <h2 class="section-title">현지 추천 맛집</h2>
    <div class="shop-grid mb40">
      <div class="shop-card">
        <div class="shop-label">이자카야</div>
        <SwiperComponent :items="q1Data" />
        <h4 class="shop-name">Charcoal Grill and Sushi, Washoku ABURIYA Sohonten</h4>
        <ul class="shop-info">
          <li>
            <div class="op-name">주메뉴</div>
            <div class="op-value">사시미 모둠, 임연수어 구이</div>
          </li>
          <li>
            <div class="op-name">운영시간</div>
            <div class="op-value">17:00 ~ 22:00</div>
          </li>
          <li>
            <div class="op-name">금액대</div>
            <div class="op-value">1,500엔 <small>*메인 메뉴 기준</small></div>
          </li>
          <li>
            <div class="op-name">위치</div>
            <div class="op-value"><a href="https://maps.app.goo.gl/swoaLBR9xHJKAbR67" target="_blank" class="btn-link">구글맵 바로가기</a></div>
          </li>
        </ul>
      </div>

      <div class="shop-card">
        <div class="shop-label">일본라멘</div>
        <SwiperComponent :items="q2Data" />
        <h4 class="shop-name">새우라멘 이카쿠</h4>
        <ul class="shop-info">
          <li>
            <div class="op-name">주메뉴</div>
            <div class="op-value">새우 미소라멘</div>
          </li>
          <li>
            <div class="op-name">운영시간</div>
            <div class="op-value">
              [월,목~일] 11:00 ~ 익일 02:00<br />
              [화] 17:00 ~ 23:00<br />
              [수] 18:00 ~ 익일 01:00
            </div>
          </li>
          <li>
            <div class="op-name">금액대</div>
            <div class="op-value">1,000엔~1,500엔</div>
          </li>
          <li>
            <div class="op-name">위치</div>
            <div class="op-value"><a href="https://maps.app.goo.gl/E9s5ZWmEAhAEijob6" target="_blank" class="btn-link">구글맵 바로가기</a></div>
          </li>
        </ul>
      </div>

      <div class="shop-card">
        <div class="shop-label">이자카야</div>
        <SwiperComponent :items="q3Data" />
        <h4 class="shop-name">후쿠요시 스스키노 한가운데점</h4>
        <ul class="shop-info">
          <li>
            <div class="op-name">주메뉴</div>
            <div class="op-value">야키토리(닭꼬치), 모츠 소바</div>
          </li>
          <li>
            <div class="op-name">운영시간</div>
            <div class="op-value">
              [화-목] 18:00 ~ 익일 03:00<br />
              [금-토] 17:00 ~ 익일 03:00<br />
              [일] 17:00 ~ 23:15
              <div class="kick">*월요일 휴무, 상황에 따라 영업시간 변동 가능</div>
            </div>
          </li>
          <li>
            <div class="op-name">금액대</div>
            <div class="op-value">1,000엔~1,500엔</div>
          </li>
          <li>
            <div class="op-name">위치</div>
            <div class="op-value"><a href="https://maps.app.goo.gl/VNhBNyqh2H4KB3QB7" target="_blank" class="btn-link">구글맵 바로가기</a></div>
          </li>
        </ul>
      </div>

      <div class="shop-card">
        <div class="shop-label">일본라멘</div>
        <SwiperComponent :items="q4Data" />
        <h4 class="shop-name">매운라멘 카라이치 스스키노점</h4>
        <ul class="shop-info">
          <li>
            <div class="op-name">주메뉴</div>
            <div class="op-value">
              매운 간장 라멘, 매운 미소 라멘
              <div class="kick">*매운맛 조절 가능(6단계부터 추가금액 발생)</div>
            </div>
          </li>
          <li>
            <div class="op-name">운영시간</div>
            <div class="op-value">
              [화~금, 일] 11:30 ~ 익일 05:00<br />
              [일] 10:30 ~ 익일 05:00
              <div class="kick">*월요일 휴무, 상황에 따라 영업시간 변동 가능</div>
            </div>
          </li>
          <li>
            <div class="op-name">금액대</div>
            <div class="op-value">1,000엔~2,000엔</div>
          </li>
          <li>
            <div class="op-name">위치</div>
            <div class="op-value"><a href="https://maps.app.goo.gl/K273oZQ1rM7UE1mC6" target="_blank" class="btn-link">구글맵 바로가기</a></div>
          </li>
        </ul>
      </div>

      <div class="shop-card">
        <div class="shop-label">우동</div>
        <SwiperComponent :items="q5Data" />
        <h4 class="shop-name">잇큐</h4>
        <ul class="shop-info">
          <li>
            <div class="op-name">주메뉴</div>
            <div class="op-value">붓카케 우동</div>
          </li>
          <li>
            <div class="op-name">운영시간</div>
            <div class="op-value">
              [매일] 11:30 ~ 18:00
              <div class="kick">*상황에 따라 영업시간 변동 가능<br />*재료 조기소진 가능</div>
            </div>
          </li>
          <li>
            <div class="op-name">금액대</div>
            <div class="op-value">1,000엔~2,000엔</div>
          </li>
          <li>
            <div class="op-name">위치</div>
            <div class="op-value"><a href="https://maps.app.goo.gl/swoaLBR9xHJKAbR67" target="_blank" class="btn-link">구글맵 바로가기</a></div>
          </li>
        </ul>
      </div>

      <div class="shop-card">
        <div class="shop-label">이자카야</div>
        <SwiperComponent :items="q6Data" />
        <h4 class="shop-name">스키야키 젠</h4>
        <ul class="shop-info">
          <li>
            <div class="op-name">주메뉴</div>
            <div class="op-value">샤브샤브 / 스키야키 전문점</div>
          </li>
          <li>
            <div class="op-name">운영시간</div>
            <div class="op-value">[매일] 17:00 ~ 23:00</div>
          </li>
          <li>
            <div class="op-name">금액대</div>
            <div class="op-value">5,000엔~6,000엔</div>
          </li>
          <li>
            <div class="op-name">위치</div>
            <div class="op-value"><a href="https://maps.app.goo.gl/ZiMYW92vxdQJm5vUA" target="_blank" class="btn-link">구글맵 바로가기</a></div>
          </li>
        </ul>
      </div>

      <div class="shop-card">
        <div class="shop-label">일본식 카레</div>
        <SwiperComponent :items="q7Data" />
        <h4 class="shop-name">스프카레 가라쿠 삿포로 본점</h4>
        <ul class="shop-info">
          <li>
            <div class="op-name">주메뉴</div>
            <div class="op-value">치킨 야채 스프카레, 야채 15가지 스프카레</div>
          </li>
          <li>
            <div class="op-name">운영시간</div>
            <div class="op-value">
              [런치] 11:30 ~ 15:30<br />
              [디너] 17:00~21:00
            </div>
          </li>
          <li>
            <div class="op-name">금액대</div>
            <div class="op-value">1,300엔~</div>
          </li>
          <li>
            <div class="op-name">위치</div>
            <div class="op-value"><a href="https://maps.app.goo.gl/m5aks1XjtJAmJfGN6" target="_blank" class="btn-link">구글맵 바로가기</a></div>
          </li>
        </ul>
      </div>

      <div class="shop-card">
        <div class="shop-label">해산물 돈부리</div>
        <SwiperComponent :items="q8Data" />
        <h4 class="shop-name">니조시장 오이소</h4>
        <ul class="shop-info">
          <li>
            <div class="op-name">주메뉴</div>
            <div class="op-value">홋카이도 덮밥(성게·연어알·킹크랩·연어)</div>
          </li>
          <li>
            <div class="op-name">운영시간</div>
            <div class="op-value">
              [월~토] 07:30 ~ 15:30 / 17:00 ~21:00<br />
              [일/공휴일] 07:30 ~ 16:00
              <div class="kick">*수요일 정기 휴일(공휴일 시 영업)</div>
            </div>
          </li>
          <li>
            <div class="op-name">금액대</div>
            <div class="op-value">1,400엔~</div>
          </li>
          <li>
            <div class="op-name">위치</div>
            <div class="op-value"><a href="https://maps.app.goo.gl/2nNLwfpbvXLvnpx69" target="_blank" class="btn-link">구글맵 바로가기</a></div>
          </li>
        </ul>
      </div>

      <div class="shop-card">
        <div class="shop-label">야키니꾸</div>
        <SwiperComponent :items="q9Data" />
        <h4 class="shop-name">ヤマダモンゴル狸小路店<br />(야마다 몽골 다누키코지점)</h4>
        <ul class="shop-info">
          <li>
            <div class="op-name">주메뉴</div>
            <div class="op-value">양고기 구이(소/돼지 구이 有)</div>
          </li>
          <li>
            <div class="op-name">운영시간</div>
            <div class="op-value">
              [월-목] 17:00 ~ 24:00<br />
              [금-토] 17:00 ~ 01:00<br />
              [일]  17:00 ~ 23:30
              <div class="kick">*매주 수요일 휴무</div>
            </div>
          </li>
          <li>
            <div class="op-name">금액대</div>
            <div class="op-value">1인당 2,000엔~</div>
          </li>
          <li>
            <div class="op-name">위치</div>
            <div class="op-value"><a href="https://maps.app.goo.gl/wLjiUjs7R3tHPnAi7" target="_blank" class="btn-link">구글맵 바로가기</a></div>
          </li>
        </ul>
      </div>

      <div class="shop-card">
        <div class="shop-label">양고기바베큐</div>
        <SwiperComponent :items="q10Data" />
        <h4 class="shop-name">징기스칸 다루마 5.5점</h4>
        <ul class="shop-info">
          <li>
            <div class="op-name">주메뉴</div>
            <div class="op-value">양고기 구이</div>
          </li>
          <li>
            <div class="op-name">운영시간</div>
            <div class="op-value">17:00 ~ [익일] 04:30</div>
          </li>
          <li>
            <div class="op-name">금액대</div>
            <div class="op-value">
              1280엔~1,780엔
              <div class="kick">*메인 메뉴 기준</div>
            </div>
          </li>
          <li>
            <div class="op-name">위치</div>
            <div class="op-value"><a href="https://maps.app.goo.gl/6HZpbXiXx6D2eZ2R6" target="_blank" class="btn-link">구글맵 바로가기</a></div>
          </li>
        </ul>
      </div>

      <div class="shop-card">
        <div class="shop-label">회전초밥</div>
        <SwiperComponent :items="q11Data" />
        <h4 class="shop-name">토리톤스시 토요히라점</h4>
        <ul class="shop-info">
          <li>
            <div class="op-name">주메뉴</div>
            <div class="op-value">자연산 회초밥</div>
          </li>
          <li>
            <div class="op-name">운영시간</div>
            <div class="op-value">11:00~22:00</div>
          </li>
          <li>
            <div class="op-name">금액대</div>
            <div class="op-value">
              접시당 160엔~
              <div class="kick">*접시 색깔별 금액 상이</div>
            </div>
          </li>
          <li>
            <div class="op-name">위치</div>
            <div class="op-value"><a href="https://maps.app.goo.gl/77qfkMF7mL1LVz9v8" target="_blank" class="btn-link">구글맵 바로가기</a></div>
          </li>
        </ul>
      </div>

      <div class="shop-card">
        <div class="shop-label">돈까스</div>
        <SwiperComponent :items="q12Data" />
        <h4 class="shop-name">카츠토쿠 토요히라점</h4>
        <ul class="shop-info">
          <li>
            <div class="op-name">주메뉴</div>
            <div class="op-value">돈까스 정식</div>
          </li>
          <li>
            <div class="op-name">운영시간</div>
            <div class="op-value">[매일] 11:00 ~ 22:00</div>
          </li>
          <li>
            <div class="op-name">금액대</div>
            <div class="op-value">1,500엔~2,000엔 대</div>
          </li>
          <li>
            <div class="op-name">위치</div>
            <div class="op-value"><a href="https://maps.app.goo.gl/ZuFTSWKHwAjaxqQ77" target="_blank" class="btn-link">구글맵 바로가기</a></div>
          </li>
        </ul>
      </div>
    </div>

    <div class="shop-notice">
      <div class="notice-header">
        <div class="category-badge">여행지 정보</div>
        <h3 class="notice-title">
          일본 식당 예약 필수! <br />
          <span>타베로그(Tabelog)</span> 사용 가이드
        </h3>
        <div class="alert-box">
          <span class="icon">⚠️</span>
          <p>삿포로 축제 기간으로 혼잡이 예상되오니 사전 예약을 적극 권장합니다.</p>
        </div>
      </div>

      <div class="notice-intro">
        <p>
          삿포로 식당들은 규모가 작아 현장 웨이팅이 길어질 수 있습니다.
          대기 없는 즐거운 식사를 위해 아래 가이드를 따라 예약해 보세요.
        </p>
      </div>

      <div class="guide-steps">
        <div class="step-box">
          <div class="step-num">01</div>
          <div class="step-info">
            <h4 class="step-label">타베로그 사이트 접속</h4>
            <a href="https://tabelog.com/kr/" target="_blank" class="link-btn">
              한국어 공식 웹사이트 <span class="arrow">→</span>
            </a>
          </div>
        </div>

        <div class="step-box">
          <div class="step-num">02</div>
          <div class="step-info">
            <h4 class="step-label">식당 검색 및 선택</h4>
            <p class="step-desc">
              훗카이도 ➔ 삿포로 ➔ 스스키노 역 선택 시 호텔 인근 맛집 검색 가능!
            </p>
            <div class="search-tips">
              <span>#평점</span> <span>#리뷰</span> <span>#사진확인</span>
            </div>
          </div>
        </div>

        <div class="step-box">
          <div class="step-num">03</div>
          <div class="step-info">
            <h4 class="step-label">예약 정보 기입</h4>
            <p class="step-desc">
              인원, 날짜 선택 후 카드 정보를 등록합니다.
              <small>*노쇼 방지 및 취소 수수료 청구 목적</small>
            </p>
          </div>
        </div>

        <div class="step-box">
          <div class="step-num">04</div>
          <div class="step-info">
            <h4 class="step-label">예약 확정 메일 수신</h4>
            <p class="step-desc">메일함을 확인하여 확정 여부를 반드시 체크하세요.</p>
          </div>
        </div>
      </div>

      <div class="tips-section">
        <h5 class="tips-title">💡 이용 꿀팁</h5>
        <ul class="tips-list">
          <li>인기 식당은 최소 <strong>2~3일 전</strong> 예약을 권장합니다.</li>
          <li>온라인 예약이 마감된 경우, <strong>전화 예약</strong>은 가능한 매장이 있습니다.</li>
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