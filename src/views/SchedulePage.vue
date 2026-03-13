<script setup>
import { ref } from "vue";
import { TabComponent } from "@/components/tab";
import { ImageComponent } from '@/components/image';
import day1_1 from "@images/schedule/day1/img1.jpg";
import day1_2 from "@images/schedule/day1/img2.jpg";
import day2_a_1 from "@images/schedule/day2/a/img1.jpg";
import day2_a_2 from "@images/schedule/day2/a/img2.jpg";
import day2_a_3 from "@images/schedule/day2/a/img3.jpg";
import day2_b_1 from "@images/schedule/day2/b/img1.jpg";
import day2_b_2 from "@images/schedule/day2/b/img2.jpg";
import day2_b_3 from "@images/schedule/day2/b/img3.jpg";
import day2_b_4 from "@images/schedule/day2/b/img4.jpg";
import day2_b_5 from "@images/schedule/day2/b/img5.jpg";
import day4_1 from "@images/schedule/day4/img1.webp";
import day4_2 from "@images/schedule/day4/img2.jpg";
import day4_3 from "@images/schedule/day4/img3.jpg";

const tabs = ref([
  { tabId: "1", tabName: "1차 4월13일 ~ 4월17일" },
  { tabId: "2", tabName: "2차 4월17일 ~ 4월21일" },
]);
const selectedTabId = ref("1");
const scheduleInfo = ref([
  {
    daparture: "2026-04-13",
    return: "2026-04-17",
    dates: {
      day1: {
        date: "2026-04-13 (월)",
        title: "삿포로 도착 후 시내 관광",
        activities: {
          common: "시코츠호 방문"
        }
      },
      day2: {
        date: "2026-04-14 (화)",
        title: "삿포로 관광",
        activities: {
          uni: "다테지다이무라 (에도시대 민속촌) 방문, 오이란쇼 및 닌자쇼 관람, 노보리베츠 지옥계곡 탐방, 히츠지가오카 전망대에서 삿포로 시내 조망",
          city: "오타루 및 삿포로 시내 관광, 오타루 운하 및 오르골당 방문, 북해도 신궁, 구 훗카이도 도청사, 오도리 공원 탐방"
        }
      },
      day3: {
        date: "2026-04-15 (수)",
        title: "삿포로 관광",
        activities: {
          uni: "오타루 및 삿포로 시내 관광, 오타루 운하 및 오르골당 방문, 북해도 신궁, 구 훗카이도 도청사, 오도리 공원 탐방",
          city: "다테지다이무라 (에도시대 민속촌) 방문, 오이란쇼 및 닌자쇼 관람, 노보리베츠 지옥계곡 탐방, 히츠지가오카 전망대에서 삿포로 시내 조망"
        }

      },
      day4: {
        date: "2026-04-16 (목)",
        title: "삿포로 시내 자유 관광",
        activities: {
          common: "유튜버 맛집 따라 잡기, 삿포로 쇼핑 핫 플레이스 추천, 돈키호테 쇼핑 아이템 추천"
        }
      },
      day5: {
        date: "2026-04-17 (금)",
        title: "체크아웃 > 공항이동",
        activities: []
      }
    }
  },
  {
    daparture: "2026-04-17",
    return: "2026-04-21",
    dates: {
      day1: {
        date: "2026-04-17 (월)",
        title: "삿포로 도착 후 시내 관광",
        activities: {
          common: "시코츠호 방문"
        }
      },
      day2: {
        date: "2026-04-18 (화)",
        title: "삿포로 관광",
        activities: {
          uni: "다테지다이무라 (에도시대 민속촌) 방문, 오이란쇼 및 닌자쇼 관람, 노보리베츠 지옥계곡 탐방, 히츠지가오카 전망대에서 삿포로 시내 조망",
          city: "오타루 및 삿포로 시내 관광, 오타루 운하 및 오르골당 방문, 북해도 신궁, 구 훗카이도 도청사, 오도리 공원 탐방"
        }
      },
      day3: {
        date: "2026-04-19 (수)",
        title: "삿포로 관광",
        activities: {
          uni: "오타루 및 삿포로 시내 관광, 오타루 운하 및 오르골당 방문, 북해도 신궁, 구 훗카이도 도청사, 오도리 공원 탐방",
          city: "다테지다이무라 (에도시대 민속촌) 방문, 오이란쇼 및 닌자쇼 관람, 노보리베츠 지옥계곡 탐방, 히츠지가오카 전망대에서 삿포로 시내 조망"
        }
      },
      day4: {
        date: "2026-04-20 (목)",
        title: "삿포로 시내 자유 관광",
        activities: {
          common: "유튜버 맛집 따라 잡기, 삿포로 쇼핑 핫 플레이스 추천, 돈키호테 쇼핑 아이템 추천"
        }
      },
      day5: {
        date: "2026-04-21 (금)",
        title: "체크아웃 > 공항이동",
        activities: []
      }
    }
  },
]);

const handleSelectTab = (tabId) => {
  selectedTabId.value = tabId;
};
</script>
<template>
  <div class="schedule-page">
    <div class="h-container">
      <div class="h-row">
        <div class="h-col h-col-12">
          <TabComponent
            :tabmenu="tabs"
            :selectedId="selectedTabId"
            @handleSelectTab="handleSelectTab
          "/>
        </div>
      </div>
      <div class="h-row">
        <div class="h-col h-col-12">
          <div class="tab-contents">
            <div v-if="selectedTabId === '1'" class="schedule-section">
              <!-- 1차: 1일차: 출발 -->
              <h2 class="schedule-title">1차(4월 13일 출발)</h2>
              <div class="box-wrap">
                <div class="box-title">미팅 안내</div>
                <div class="box-content">
                  <div class="h-row">
                    <div class="h-col h-col-12 h-col-md-6">
                      <p><strong>미팅 포인트</strong></p>
                      <ul class="list-check">
                        <li>유니팀(아시아나) : 인천국제공항 제2터미널 8번 출입구 안쪽</li>
                        <li>시티팀(대한항공) : 인천국제공항 제2터미널 3번 출입구 안쪽</li>
                      </ul>
                    </div>
                    <div class="h-col h-col-12 h-col-md-6">
                      <p><strong>미팅 시간:</strong></p>
                      <ul class="list-check">
                        <li>유니팀(아시아나) : 2026년 4월 13일(금) 07시 45분</li>
                        <li>시티팀(대한항공) : 2026년 4월 13일(금) 08시 00분</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="h-row">
                <div class="h-col h-col-12 h-col-md-6">
                  <div class="flight-info">
                    <div class="flight-area">인천 2터미널 출발 - 유니팀(아시아나)</div>
                    <div class="flight-route">
                      <div class="city">인천 (ICN)<br />10:15</div>
                      <div class="flight-code">OZ 174</div>
                      <div class="city">삿포로 (CTS)<br />13:00</div>
                    </div>
                    <div class="hotel-name">숙소: SAPPORO GRAND HOTEL</div>
                  </div>
                </div>
                <div class="h-col h-col-12 h-col-md-6">
                  <div class="flight-info">
                    <div class="flight-area">인천 2터미널 출발 - 시티팀(대한항공)</div>
                    <div class="flight-route">
                      <div class="city">인천 (ICN)<br />10:35</div>
                      <div class="flight-code">KE 765</div>
                      <div class="city">삿포로 (CTS)<br />13:25</div>
                    </div>
                    <div class="hotel-name">숙소: SAPPORO GRAND HOTEL</div>
                  </div>
                </div>
              </div>
              <!-- 1차: 1일차 -->
              <div class="day-card">
                <div class="day-header">
                  <div class="day-number">Day 1</div>
                  <div class="day-date">{{ scheduleInfo[0].dates.day1.date }}</div>
                  <div class="day-title">{{ scheduleInfo[0].dates.day1.title }}</div>
                </div>
                <div class="day-activities">
                  <div class="activity-section">
                    <div class="h-row h-row-mb">
                      <div class="h-col h-col-12 h-col-md-6">
                        <div class="activity-description">{{ scheduleInfo[0].dates.day1.activities.common }}</div>
                        <ImageComponent :src="day1_1" alt="시코츠호" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 1차: 2일차 -->
              <div class="day-card">
                <div class="day-header">
                  <div class="day-number">Day 2</div>
                  <div class="day-date">{{ scheduleInfo[0].dates.day2.date }}</div>
                  <div class="day-title">{{ scheduleInfo[0].dates.day2.title }}</div>
                </div>
                <div class="day-activities">
                  <div class="h-row h-row-mb">
                    <div class="h-col h-col-12 h-col-md-6">
                      <div class="activity-section">
                        <span class="section-badge">유니팀</span>
                        <div class="activity-description">{{ scheduleInfo[0].dates.day2.activities.uni }}</div>
                        <div class="h-row h-row-mb">
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_a_1" alt="다테지다이무라 (에도시대 민속촌)" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_a_2" alt="에도시대 부호의 연회 오이란쇼, 닌자쇼 관람" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_a_3" alt="일본 3대 온천의 마을 노보리베츠의 지옥계곡" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day1_2" alt="히츠지가오카 전망대" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="h-col h-col-12 h-col-md-6">
                      <div class="activity-section">
                        <span class="section-badge">시티팀</span>
                        <div class="activity-description">{{ scheduleInfo[0].dates.day2.activities.city }}</div>
                        <div class="h-row h-row-mb">
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_1" alt="오타루 및 삿포로 시내 관광" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_2" alt="오타루 운하 및 오르골당 관광" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_3" alt="북해도 신궁" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_4" alt="구 훗카이도 도청사" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_5" alt="오도리 공원" />
                          </div>
                        </div>
                        <div class="section-info">🍴 중식(현지식) / 석식(자유식)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 1차: 3일차 -->
              <div class="day-card">
                <div class="day-header">
                  <div class="day-number">Day 3</div>
                  <div class="day-date">{{ scheduleInfo[0].dates.day3.date }}</div>
                  <div class="day-title">{{ scheduleInfo[0].dates.day3.title }}</div>
                </div>
                <div class="day-activities">
                  <div class="h-row h-row-mb">
                    <div class="h-col h-col-12 h-col-md-6">
                      <div class="activity-section">
                        <span class="section-badge">유니팀</span>
                        <div class="activity-description">{{ scheduleInfo[0].dates.day3.activities.uni }}</div>
                        <div class="h-row h-row-mb">
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_1" alt="오타루 및 삿포로 시내 관광" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_2" alt="오타루 운하 및 오르골당 관광" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_3" alt="북해도 신궁" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_4" alt="구 훗카이도 도청사" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_5" alt="오도리 공원" />
                          </div>
                        </div>
                        <div class="section-info">🍴 중식(현지식) / 석식(자유식)</div>
                      </div>
                    </div>
                    <div class="h-col h-col-12 h-col-md-6">
                      <div class="activity-section">
                        <span class="section-badge">시티팀</span>
                        <div class="activity-description">{{ scheduleInfo[0].dates.day3.activities.city }}</div>
                        <div class="h-row h-row-mb">
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_a_1" alt="다테지다이무라 (에도시대 민속촌)" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_a_2" alt="에도시대 부호의 연회 오이란쇼, 닌자쇼 관람" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_a_3" alt="일본 3대 온천의 마을 노보리베츠의 지옥계곡" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day1_2" alt="히츠지가오카 전망대" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 1차: 4일차 -->
              <div class="day-card">
                <div class="day-header">
                  <div class="day-number">Day 4</div>
                  <div class="day-date">{{ scheduleInfo[0].dates.day4.date }}</div>
                  <div class="day-title">삿포로 시내 자유 관광</div>
                </div>
                <div class="day-activities">
                  <div class="activity-description">{{ scheduleInfo[0].dates.day4.activities.common }}</div>
                  <div class="activity-section">
                    <div class="h-row h-row-mb">
                      <div class="h-col h-col-12 h-col-md-4">
                        <ImageComponent :src="day4_1" alt="유튜버 맛집 따라 잡기" />
                      </div>
                      <div class="h-col h-col-12 h-col-md-4">
                        <ImageComponent :src="day4_2" alt="삿포로 쇼핑 핫 플레이스 추천" />
                      </div>
                      <div class="h-col h-col-12 h-col-md-4">
                        <ImageComponent :src="day4_3" alt="돈키호테 쇼핑 아이템 추천" />
                      </div>
                    </div>
                    <div class="section-info">🍴 중식(현지식) / 갈라디너(호텔식)</div>
                    <div class="section-info">
                      <p class="mb10">🛍️ 프리미엄 아울렛 자유 셔틀 운영</p>
                      <ul class="list-dot">
                        <li>호텔 출발 : 10:00 / 11:00 / 12:00</li>
                        <li>아울렛 출발 : 12:00 / 13:00 / 14:00</li>
                        <li>호텔 복귀 후 휴식</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 1차: 5일차 -->
              <div class="day-card">
                <div class="day-header nomargin">
                  <div class="day-number">Day 5</div>
                  <div class="day-date">{{ scheduleInfo[0].dates.day5.date }}</div>
                  <div class="day-title">{{ scheduleInfo[0].dates.day5.title }}</div>
                </div>
              </div>
              <!-- 1차: 5일차: 복귀 -->
              <div class="h-row">
                <div class="h-col h-col-12 h-col-md-6">
                  <div class="flight-info return">
                    <div class="flight-area">신치토세 국제공항 출발 - 유니팀(아시아나)</div>
                    <div class="flight-route">
                      <div class="city">삿포로 (CTS)<br />14:30</div>
                      <div class="flight-code">OZ 173</div>
                      <div class="city">인천 (ICN)<br />17:45</div>
                    </div>
                  </div>
                </div>
                <div class="h-col h-col-12 h-col-md-6">
                  <div class="flight-info return">
                    <div class="flight-area">신치토세 국제공항 출발 - 시티팀(대한항공)</div>
                    <div class="flight-route">
                      <div class="city">삿포로 (CTS)<br />15:05</div>
                      <div class="flight-code"> KE 766</div>
                      <div class="city">인천 (ICN)<br />18:10</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="selectedTabId === '2'" class="schedule-section">
              <!-- 2차: 1일차: 출발 -->
              <h2 class="schedule-title">2차(4월 17일 출발)</h2>
              <div class="box-wrap">
                <div class="box-title">미팅 안내</div>
                <div class="box-content">
                  <div class="h-row">
                    <div class="h-col h-col-12 h-col-md-6">
                      <p><strong>미팅 포인트</strong></p>
                      <ul class="list-check">
                        <li>유니팀(아시아나) : 인천국제공항 제2터미널 8번 출입구 안쪽</li>
                        <li>시티팀(대한항공) : 인천국제공항 제2터미널 3번 출입구 안쪽</li>
                      </ul>
                    </div>
                    <div class="h-col h-col-12 h-col-md-6">
                      <p><strong>미팅 시간:</strong></p>
                      <ul class="list-check">
                        <li>유니팀(아시아나) : 2026년 4월 17일(금) 07시 45분</li>
                        <li>시티팀(대한항공) : 2026년 4월 17일(금) 08시 00분</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="h-row">
                <div class="h-col h-col-12 h-col-md-6">
                  <div class="flight-info">
                    <div class="flight-area">인천 2터미널 출발 - 유니팀(아시아나)</div>
                    <div class="flight-route">
                      <div class="city">인천 (ICN)<br />10:15</div>
                      <div class="flight-code">OZ 174</div>
                      <div class="city">삿포로 (CTS)<br />13:00</div>
                    </div>
                    <div class="hotel-name">숙소: SAPPORO GRAND HOTEL</div>
                  </div>
                </div>
                <div class="h-col h-col-12 h-col-md-6">
                  <div class="flight-info">
                    <div class="flight-area">인천 2터미널 출발 - 시티팀(대한항공)</div>
                    <div class="flight-route">
                      <div class="city">인천 (ICN)<br />10:35</div>
                      <div class="flight-code">KE 765</div>
                      <div class="city">삿포로 (CTS)<br />13:25</div>
                    </div>
                    <div class="hotel-name">숙소: SAPPORO GRAND HOTEL</div>
                  </div>
                </div>
              </div>
              <!-- 2차: 1일차 -->
              <div class="day-card">
                <div class="day-header">
                  <div class="day-number">Day 1</div>
                  <div class="day-date">{{ scheduleInfo[1].dates.day1.date }}</div>
                  <div class="day-title">{{ scheduleInfo[1].dates.day1.title }}</div>
                </div>
                <div class="day-activities">
                  <div class="activity-section">
                    <div class="h-row h-row-mb">
                      <div class="h-col h-col-12 h-col-md-6">
                        <div class="activity-description">{{ scheduleInfo[1].dates.day1.activities.common }}</div>
                        <ImageComponent :src="day1_1" alt="시코츠호" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 2차: 2일차 -->
              <div class="day-card">
                <div class="day-header">
                  <div class="day-number">Day 2</div>
                  <div class="day-date">{{ scheduleInfo[1].dates.day2.date }}</div>
                  <div class="day-title">{{ scheduleInfo[1].dates.day2.title }}</div>
                </div>
                <div class="day-activities">
                  <div class="h-row h-row-mb">
                    <div class="h-col h-col-12 h-col-md-6">
                      <div class="activity-section">
                        <span class="section-badge">유니팀</span>
                        <div class="activity-description">{{ scheduleInfo[1].dates.day2.activities.uni }}</div>
                        <div class="h-row h-row-mb">
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_a_1" alt="다테지다이무라 (에도시대 민속촌)" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_a_2" alt="에도시대 부호의 연회 오이란쇼, 닌자쇼 관람" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_a_3" alt="일본 3대 온천의 마을 노보리베츠의 지옥계곡" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day1_2" alt="히츠지가오카 전망대" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="h-col h-col-12 h-col-md-6">
                      <div class="activity-section">
                        <span class="section-badge">시티팀</span>
                        <div class="activity-description">{{ scheduleInfo[1].dates.day2.activities.city }}</div>
                        <div class="h-row h-row-mb">
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_1" alt="오타루 및 삿포로 시내 관광" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_2" alt="오타루 운하 및 오르골당 관광" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_3" alt="북해도 신궁" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_4" alt="구 훗카이도 도청사" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_5" alt="오도리 공원" />
                          </div>
                        </div>
                        <div class="section-info">🍴 중식(현지식) / 석식(자유식)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 2차: 3일차 -->
              <div class="day-card">
                <div class="day-header">
                  <div class="day-number">Day 3</div>
                  <div class="day-date">{{ scheduleInfo[1].dates.day3.date }}</div>
                  <div class="day-title">{{ scheduleInfo[1].dates.day3.title }}</div>
                </div>
                <div class="day-activities">
                  <div class="h-row h-row-mb">
                    <div class="h-col h-col-12 h-col-md-6">
                      <div class="activity-section">
                        <span class="section-badge">유니팀</span>
                        <div class="activity-description">{{ scheduleInfo[1].dates.day3.activities.uni }}</div>
                        <div class="h-row h-row-mb">
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_1" alt="오타루 및 삿포로 시내 관광" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_2" alt="오타루 운하 및 오르골당 관광" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_3" alt="북해도 신궁" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_4" alt="구 훗카이도 도청사" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_b_5" alt="오도리 공원" />
                          </div>
                        </div>
                        <div class="section-info">🍴 중식(현지식) / 석식(자유식)</div>
                      </div>
                    </div>
                    <div class="h-col h-col-12 h-col-md-6">
                      <div class="activity-section">
                        <span class="section-badge">시티팀</span>
                        <div class="activity-description">{{ scheduleInfo[1].dates.day3.activities.city }}</div>
                        <div class="h-row h-row-mb">
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_a_1" alt="다테지다이무라 (에도시대 민속촌)" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_a_2" alt="에도시대 부호의 연회 오이란쇼, 닌자쇼 관람" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day2_a_3" alt="일본 3대 온천의 마을 노보리베츠의 지옥계곡" />
                          </div>
                          <div class="h-col h-col-12 h-col-md-6">
                            <ImageComponent :src="day1_2" alt="히츠지가오카 전망대" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 2차: 4일차 -->
              <div class="day-card">
                <div class="day-header">
                  <div class="day-number">Day 4</div>
                  <div class="day-date">{{ scheduleInfo[1].dates.day4.date }}</div>
                  <div class="day-title">삿포로 시내 자유 관광</div>
                </div>
                <div class="day-activities">
                  <div class="activity-description">{{ scheduleInfo[1].dates.day4.activities.common }}</div>
                  <div class="activity-section">
                    <div class="h-row h-row-mb">
                      <div class="h-col h-col-12 h-col-md-4">
                        <ImageComponent :src="day4_1" alt="유튜버 맛집 따라 잡기" />
                      </div>
                      <div class="h-col h-col-12 h-col-md-4">
                        <ImageComponent :src="day4_2" alt="삿포로 쇼핑 핫 플레이스 추천" />
                      </div>
                      <div class="h-col h-col-12 h-col-md-4">
                        <ImageComponent :src="day4_3" alt="돈키호테 쇼핑 아이템 추천" />
                      </div>
                    </div>
                    <div class="section-info">🍴 중식(현지식) / 갈라디너(호텔식)</div>
                    <div class="section-info">
                      <p class="mb10">🛍️ 프리미엄 아울렛 자유 셔틀 운영</p>
                      <ul class="list-dot">
                        <li>호텔 출발 : 10:00 / 11:00 / 12:00</li>
                        <li>아울렛 출발 : 12:00 / 13:00 / 14:00</li>
                        <li>호텔 복귀 후 휴식</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 2차: 5일차 -->
              <div class="day-card">
                <div class="day-header nomargin">
                  <div class="day-number">Day 5</div>
                  <div class="day-date">{{ scheduleInfo[1].dates.day5.date }}</div>
                  <div class="day-title">{{ scheduleInfo[1].dates.day5.title }}</div>
                </div>
              </div>
              <!-- 2차: 5일차: 복귀 -->
              <div class="h-row">
                <div class="h-col h-col-12 h-col-md-6">
                  <div class="flight-info return">
                    <div class="flight-area">신치토세 국제공항 출발 - 유니팀(아시아나)</div>
                    <div class="flight-route">
                      <div class="city">삿포로 (CTS)<br />14:30</div>
                      <div class="flight-code">OZ 173</div>
                      <div class="city">인천 (ICN)<br />17:45</div>
                    </div>
                  </div>
                </div>
                <div class="h-col h-col-12 h-col-md-6">
                  <div class="flight-info return">
                    <div class="flight-area">신치토세 국제공항 출발 - 시티팀(대한항공)</div>
                    <div class="flight-route">
                      <div class="city">삿포로 (CTS)<br />15:05</div>
                      <div class="flight-code"> KE 766</div>
                      <div class="city">인천 (ICN)<br />18:10</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.schedule-page {
  padding: 40px 10px;
  @media (min-width: 768px) {
    padding: 60px 20px 80px;
  }

  // Tab Component Styling
  :deep(.tab-component) {
    margin-bottom: 40px;

    .tab-menu {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 12px;
        flex-wrap: wrap;

        > li {
          padding: 14px 20px;
          flex: 1 1 auto;
          min-width: 200px;
          text-align: center;
          font-size: 18px;
          font-weight: 500;
          color: #555;
          border: 2px solid #eee;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
          background-clip: border-box;
          background-origin: border-box;

          @media (min-width: 768px) {
            font-size: 16px;
            padding: 16px 32px;
          }

          &:hover {
            border-color: #C2335F;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(25, 115, 75, 0.2);
          }

          &.active {
            background-image: linear-gradient(135deg, #C2335F 0%, #273672 100%);
            border-color: transparent;
            color: #fff;
            box-shadow: 0 4px 16px rgba(25, 115, 75, 0.3);

            .tab-name {
              color: white;
              font-weight: 600;
            }
          }
        }
      }
    }
  }

  // Tab Contents
  .tab-contents {
    > div {
      animation: fadeIn 0.4s ease;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  // Schedule Title
  .schedule-title {
    font-size: 28px;
    font-weight: 700;
    color: #333;
    margin-bottom: 32px;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 36px;
      margin-bottom: 48px;
    }
  }

  // Meeting Info Box
  .meeting-info {
    background: white;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 32px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    @media (min-width: 768px) {
      padding: 32px;
    }

    .info-title {
      font-size: 18px;
      font-weight: 600;
      color: #C2335F;
      margin-bottom: 16px;
    }

    .info-content {
      font-size: 15px;
      color: #555;

      strong {
        color: #333;
        font-weight: 600;
      }
    }
  }

  // Flight Info
  .flight-info {
    background: linear-gradient(135deg, #C2335F 0%, #273672 100%);
    color: white;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 32px;
    text-align: center;

    @media (min-width: 768px) {
      padding: 32px;
    }

    .flight-area {
      font-size: 16px;
      color: #fff;
      margin-bottom: 12px;
    }

    .flight-route {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 12px;
      @media (max-width: 370px) {
        flex-direction: column;
      }
      .city {
        font-size: 20px;
        font-weight: 700;

        @media (min-width: 768px) {
          font-size: 24px;
        }
      }

      .flight-code {
        font-size: 18px;
        opacity: 0.9;
        @media (max-width: 370px) {
          padding: 10px 0;
          border-top: 1px solid #fff;
          border-bottom: 1px solid #fff;
        }
      }
    }

    .hotel-name {
      font-size: 16px;
      margin-top: 16px;
      opacity: 0.95;
    }

    &.return {
      background: #333;

      .flight-area {
        color: #aaa;
      }
    }
  }

  // Day Cards
  .day-card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    @media (min-width: 768px) {
      padding: 32px;
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }

    .day-header {
      border-left: 4px solid #C2335F;
      padding-left: 16px;
      margin-bottom: 20px;

      .day-number {
        font-size: 14px;
        color: #C2335F;
        font-weight: 600;
        margin-bottom: 4px;
      }

      .day-date {
        font-size: 20px;
        font-weight: 700;
        color: #333;

        @media (min-width: 768px) {
          font-size: 24px;
        }
      }

      .day-title {
        font-size: 16px;
        color: #666;
        margin-top: 8px;
      }
    }

    .day-activities {
      .activity-description {
        font-size: 12px;
        padding: 24px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        background-color: var(--common-bg-color);
        transition: box-shadow 0.3s ease;
        margin-bottom: 20px;
        @media (min-width: 768px) {
          font-size: 14px;
        }
      }
      .activity-section {
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }

        .section-badge {
          display: inline-block;
          background: #e3f2fd;
          color: #1976d2;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .activity-list {
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            padding: 8px 0 8px 24px;
            position: relative;
            font-size: 15px;
            color: #555;

            &::before {
              content: '•';
              position: absolute;
              left: 0;
              color: #C2335F;
              font-size: 18px;
            }
          }
        }
        .section-info {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 12px 16px;
          margin-top: 12px;
          font-size: 16px;
          color: #666;
          border-left: 3px solid #ffc107;
        }
      }
    }
  }


  // Flight Info Return
  .flight-info.return {
    background: #333;
    margin-top: 40px;

    .info-title {
      font-size: 16px;
      color: #aaa;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  // Common Activities
  .common-activities {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #eee;
  }
}
</style>
