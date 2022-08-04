<template>
  <main>
    <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <NavMenu v-if="showNav" @close="closeNav" />
    </transition>
    <header>
      <div class="container row">
        <div class="menu col-3 row">
          <img src="@/assets/img/icons/menu.svg" alt="" @click="toggleNav" />
          <p class="text">Menu</p>
          <img src="@/assets/img/icons/search.svg" alt="" />
        </div>

        <div class="logo col-4">
          <nuxt-link to="/">
            <img src="@/assets/img/logos/logo.svg" alt="" />
          </nuxt-link>
        </div>

        <div class="buttons col-4 row">
          <button class="btn-primary sign-up">Sign Up</button>
          <a
            href="https://reservations.kurifturesorts.com/"
            target="_blank"
            class="btn-primary"
            >Reserve</a
          >
        </div>
      </div>
    </header>
  </main>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
    closeNav() {
      this.showNav = !this.showNav;
    },
    beforeEnter(el) {
      console.log("before enter ");
      el.style.transform = "translateX(-100%)";
    },

    enter(el, done) {
      console.log("starting to enter");
      gsap.to(el, {
        duration: 1,
        x: 0,
        ease: "circ.out",
        onComplete: done,
      });
    },
    beforeLeave(el) {
      console.log("before leave ");
      el.style.transform = "translateX(0)";
    },

    leave(el, done) {
      console.log("starting to leave");
      gsap.to(el, {
        duration: 1,
        x: -100 + "%",
        ease: "expo.out",
        onComplete: done,
      });
    },
    afterLeave() {
      console.log("after leave");
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  position: sticky;
  top: 0;
  background: #f3eee7;
  z-index: 9999;
  padding-bottom: 1rem;
  header {
    width: 100%;
    padding-top: 2rem;
    .container {
      align-items: center;
      justify-content: space-between;
      .logo {
        display: flex;
        justify-content: center;
      }
      .menu {
        gap: 1.5rem;
        p {
          display: none;
        }
      }
      .buttons {
        .sign-up {
          display: none;
        }
        &:last-child {
          justify-content: flex-end;
        }
      }
    }
  }
}

@include responsive($md) {
  main {
    header {
      .container {
        .buttons {
          .sign-up {
            margin-right: 1rem;
            display: block;
          }
        }
      }
    }
  }
}

@include responsive($lg) {
  main {
    header {
      .container {
        .menu {
          p {
            display: block;
          }
        }
      }
    }
  }
}
</style>
