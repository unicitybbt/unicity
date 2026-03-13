<script setup>
import { ImageComponent } from '@/components/image';
import img1 from '@images/local/activity/activity-img1.jpg';
import img2 from '@images/local/activity/activity-img2.jpg';
import img3 from '@images/local/activity/activity-img3.webp';
// import img4 from "@images/schedule/day1/img2.jpg";
import img5 from "@images/schedule/day2/b/img3.jpg";
import img6 from "@images/schedule/day2/b/img5.jpg";

</script>
<template>
  <div class="activity-container">
    <h2 class="section-title">액티비티</h2>

    <ImageComponent :src="img1" alt="" class="main-img mb20" />

    <div class="info-section">
      <h3 class="section-subtitle">시코츠호 관광</h3>
      <div class="section-details">
        일본 최북단의 얼지 않는 호수, <strong>시코츠호</strong>.<br />
        일본 최북단의 얼음이 얼지 않는 <strong>부동호</strong>로 알려져 있습니다.<br />
        맑고 깊은 호수 풍경과 자연 속에 놓인 <strong>야마엔 철교</strong>,<br />
        그리고 시코츠호의 명물 <strong>에그포테이토</strong>까지.<br />
        <strong>자연의 고요함과 지역의 맛을 함께 즐기는 홋카이도의 특별한 힐링 여행지</strong>입니다.
      </div>
    </div>
    <div class="section-divider"></div>
    <ImageComponent :src="img2" alt="" class="main-img mb20" />
    <div class="info-section">
      <h3 class="section-subtitle">노보리베츠 관광</h3>
      <div class="section-details">
        노보리베츠는 일본 홋카이도에 위치한 해안마을로, <br />
        뜨거운 온천의 증기가 피어오르는 <strong>지옥계곡</strong>,<br />
        에도시대의 문화를 체험하는 <strong>다테지다이무라</strong>, <br />
        자연의 신비와 역사, 문화가 어우러진<br />
        <strong>노보리베츠의 매력을 한 번에 만나는 특별한 여행지</strong>입니다.
      </div>
    </div>
    <div class="section-divider"></div>
    <ImageComponent :src="img3" alt="" class="main-img mb20" />
    <div class="info-section">
      <h3 class="section-subtitle">오타루 관광</h3>
      <div class="section-details">
        오타루는 일본의 훗카이도에 위치한 중요한 항구 도시로서,<br />
        낭만적인 풍경의 <strong>오타루 운하</strong>,<br />
        아름다운 선율 가득한 공간 <strong>오르골당</strong>,<br />
        그리고 감각적인 상점들이 이어진 골목들까지,<br />
        역사와 감성, 그리고 <strong>훗카이도의 분위기를 천천히 걸으며 즐기는 매력적인 도시, 오타루</strong>입니다.
      </div>
    </div>

    <div class="section-divider"></div>
    <ImageComponent :src="img4" alt="" class="main-img mb20" />
    <div class="info-section">
      <h3 class="section-subtitle">히츠지가오카 전망대</h3>
      <div class="section-details">
        광활한 초원과 삿포로 시내 전망을 동시에 즐길 수 있는 삿포로 대표 전망 명소입니다.<br />
        이곳에는 <strong>“Boys, be ambitious!”</strong>라는 명언으로 유명한 <strong>클라크 박사 동상</strong>이 있어 삿포로를 상징하는 사진 명소로 알려져 있습니다.
      </div>
    </div>

    <div class="section-divider"></div>
    <ImageComponent :src="img5" alt="" class="main-img mb20" />
    <div class="info-section">
      <h3 class="section-subtitle">홋카이도 신궁</h3>
      <div class="section-details">
        홋카이도 개척과 발전을 기원하기 위해 세워진 신사로,<br />
        삿포로 시민과 관광객이 많이 찾는 대표적인 전통 문화 명소입니다.<br />
        마루야마 공원의 울창한 숲 속에 위치해 <strong>조용하고 평온한 분위기</strong>를 느낄 수 있습니다.
      </div>
    </div>

    <div class="section-divider"></div>
    <ImageComponent :src="img6" alt="" class="main-img mb20" />
    <div class="info-section">
      <h3 class="section-subtitle">오도리 공원</h3>
      <div class="section-details">
        삿포로 중심부를 가로지르는 도심 공원으로, 시민들의 휴식 공간이자 다양한 축제가 열리는 장소입니다.<br />
        넓은 녹지와 산책로가 있어 삿포로의 <strong>여유로운 분위기</strong>를 느낄 수 있는 대표적인 도심 공원입니다.
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// Activity Section (Tab 4: 액티비티)
.tags-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  .tag {
    display: inline-block;
    background: #e3f2fd;
    color: #1976d2;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 12px;
  }
}
</style>