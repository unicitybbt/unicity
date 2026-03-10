<script setup>
import { ref } from "vue";
import { TabComponent } from "@/components/tab";
import Intro from "@/features/local/Intro.vue";
import Airport from "@/features/local/Airport.vue";
import Recommends from "@/features/local/Recommends.vue";
import Activity from "@/features/local/Activity.vue";
import Hotel from "@/features/local/Hotel.vue";
import Recommends2 from "@/features/local/Recommends2.vue";

const tabs = ref([
  { tabId: "1", tabName: "삿포로 소개" },
  { tabId: "2", tabName: "공항" },
  { tabId: "3", tabName: "호텔" },
  { tabId: "4", tabName: "액티비티" },
  { tabId: "5", tabName: "추천 맛집" },
  { tabId: "6", tabName: "추천 쇼핑몰" },
]);
const selectedTabId = ref("1");
const handleSelectTab = (tabId) => {
  selectedTabId.value = tabId;
};
</script>
<template>
  <div class="main-page local-page">
    <div class="h-container">
      <div class="h-row">
        <div class="h-col h-col-12">
          <TabComponent
            :tabmenu="tabs"
            :selectedId="selectedTabId"
            @handleSelectTab="handleSelectTab"
          />
        </div>
      </div>
    </div>
    <div class="h-container">
      <div class="tab-contents">
        <!-- Tab 1: 삿포로 소개 -->
        <div v-if="selectedTabId === '1'" class="content-area">
          <Intro />
        </div>

        <!-- Tab 2: 공항 -->
        <div v-if="selectedTabId === '2'" class="content-area">
          <Airport />
        </div>

        <!-- Tab 3: 호텔 -->
        <div v-if="selectedTabId === '3'" class="content-area">
          <Hotel />
        </div>

        <!-- Tab 4: 액티비티 -->
        <div v-if="selectedTabId === '4'" class="content-area">
          <Activity />
        </div>

        <!-- Tab 5: 추천 맛집 -->
        <div v-if="selectedTabId === '5'" class="content-area">
          <Recommends />
        </div>

        <!-- Tab 6: 추천 쇼핑몰 -->
        <div v-if="selectedTabId === '6'" class="content-area">
          <Recommends2 />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.local-page {
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
          padding: 12px 24px;
          flex: 0 1 auto;
          border: 2px solid #e0e0e0;
          border-radius: 30px;
          background: white;
          transition: all 0.3s ease;
          font-size: 15px;
          font-weight: 500;
          color: #333;
          cursor: pointer;
          background-clip: border-box;
          background-origin: border-box;

          @media (min-width: 768px) {
            padding: 14px 32px;
            font-size: 16px;
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

  .main-title {
    font-size: 28px;
    font-weight: 700;
    color: #C2335F;
    margin-bottom: 8px;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 36px;
      margin-bottom: 12px;
    }
  }

  .subtitle {
    font-size: 16px;
    color: #666;
    margin-bottom: 32px;
    text-align: center;
    font-style: italic;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }


  // Tab Contents
  .tab-contents {
    .content-area {
      animation: fadeIn 0.4s ease;

      .main-title {
        font-size: 28px;
        font-weight: 700;
        color: #C2335F;
        margin-bottom: 8px;
        text-align: center;

        @media (min-width: 768px) {
          font-size: 36px;
          margin-bottom: 12px;
        }
      }

      .subtitle {
        font-size: 16px;
        color: #666;
        margin-bottom: 32px;
        text-align: center;
        font-style: italic;

        @media (min-width: 768px) {
          font-size: 18px;
        }
      }

      .section-description {
        font-size: 16px;
        color: #555;
        margin-bottom: 32px;
        text-align: center;

        @media (min-width: 768px) {
          font-size: 17px;
        }
      }

      .section-title {
        font-size: 22px;
        font-weight: 700;
        color: #333;
        margin: 48px 0 24px;
        padding-bottom: 12px;
        border-bottom: 2px solid #C2335F;

        @media (min-width: 768px) {
          font-size: 24px;
        }
      }
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
}
</style>
