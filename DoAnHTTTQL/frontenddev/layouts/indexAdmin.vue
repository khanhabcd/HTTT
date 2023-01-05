<template>
  <main class="main-body">
    <!-- <div class="loading-content" v-if="checkLoading">
      <a-icon type="loading" />
    </div> -->
    <div class="main-container">
      <!-- header layout admin -->
      <div class="content-header">
        <div class="content">
          <div class="left">
            <h3 class="text-title">Admin</h3>
          </div>
          <!-- <div class="right">
            <div class="content-user">
              <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                  <div class="acc-user">
                    <div class="box-user">
                      <img
                        :src="user ? user.avatar : '/images/no-user.png'"
                        alt=""
                      />
                    </div>
                    <a-icon type="down" />
                  </div>
                </a>
                <a-menu slot="overlay">
                  <a-menu-item key="0">
                    <a-icon type="user" /> Tài khoản
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item key="1">
                    <a-icon type="poweroff" /> Đăng xuất
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
          </div> -->
        </div>
      </div>
      <!-- content -->
      <div class="main-content">
        <div class="nav-content">
          <div class="nav-admin">
            <div class="title-menu">
              <h3 class="text-title">Admin</h3>
            </div>
            <div class="menu-admin">
              <div
                class="item-menu-admin"
                v-for="item in menuList"
                :key="item.key"
                :class="{ active: item.route == routeActive }"
                @click="pushRouter(item.route)"
              >
                <a-icon :type="item.icon" />
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="body-content">
          <slot />
        </div>
      </div>
    </div>
    <notifications class="notify" position="top right" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      navigation: "",
      menuDefault: [],
      menuList: [
        {
          key: "bill",
          icon: "pie-chart",
          name: "Bill",
          route: "/admin/bill",
        },
        {
          key: "product",
          icon: "folder",
          name: "Product",
          route: "/admin/product",
        },
      ],
    };
  },
  methods: {
    pushRouter(path) {
      this.$router.push({
        path: `${path}`,
      });
    },
  },
  computed: {
    routeActive() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-body {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  .main-container {
    width: 100%;
    height: 100%;
    border-top: 2px solid #42b883;
    background-color: #f5f6fa;
    .main-content {
      height: calc(100% - 80px);
      padding-right: 30px;
      padding-left: 20px;
      display: flex;
      align-items: flex-start;
      .nav-content {
        height: 100%;
      }
      .body-content {
        padding-left: 20px;
        width: 100%;
        height: 100%;
        overflow-y: auto;
      }
    }
  }
}
.content-header {
  height: 80px;
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  .content {
    width: 100%;
    padding: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      .text-title {
        margin-bottom: 0;
      }
    }
    // .right {
    // }
  }
}
.acc-user {
  display: flex;
  align-items: center;
  color: #000;
  .box-user {
    width: 30px;
    height: 30px;
    min-width: 30px;
    border-radius: 50%;
    margin-right: 10px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.nav-admin {
  height: 100%;
  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.1), 0 4px 20px 0 rgba(0, 0, 0, 0.15);
  width: 230px;
  background: linear-gradient(0deg, #389466 0%, #42b883 100%);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  .title-menu {
    height: 70px;
    display: flex;
    align-items: center;
    padding: 8px 12px 16px;
    .text-title {
      margin-bottom: 0;
      font-weight: normal;
      color: #fff;
    }
  }
  .menu-admin {
    width: 100%;
    border-top: 1px solid #fff;
    padding-top: 20px;
    .item-menu-admin {
      padding: 20px 12px 20px 20px;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      .anticon {
        color: rgba(255, 255, 255, 0.8);
        margin-right: 10px;
        font-size: 16px;
      }
      span {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.8);
      }
    }
    .item-menu-admin:hover {
      .anticon {
        color: #fff;
      }
      span {
        color: #fff;
      }
    }
    .active {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
<style lang="scss">
.nav-admin {
  .ant-menu {
    height: calc(100% - 70px);
    background: linear-gradient(0deg, #389466 0%, #42b883 100%);
    color: rgba(255, 255, 255, 0.8);
    .ant-menu-item {
      margin-top: 10px;
      margin-bottom: 15px;
    }
    .ant-menu-item:last-child {
      margin-bottom: 0;
    }
    .ant-menu-item::after {
      border-color: #fff;
    }
    .ant-menu-item-selected {
      color: #fff;
      background-color: transparent;
    }
    .ant-menu-item-active {
      color: #fff;
    }
  }

  .hr-line {
    border-top: 1px solid #fff;
    width: calc(100% - 24px);
    padding: 0 24px;
  }
}
</style>
