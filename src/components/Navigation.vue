<template>
  <div class="nav-container">
    <nav class="menu-opener" v-on:click="menuOpen()" v-bind:class="{'active': menuToggle }">
      <div class="menu-opener-inner" v-bind:class="{'active': menuToggle}"></div>
    </nav>
    <nav class="menu" v-bind:class="{'active': menuToggle}">
      <ul class="menu--list">
        <router-link class="menu--list-item" to="/" v-bind:class="{'active': menuToggle}">
          <li>
            Home
          </li>
        </router-link>
        <!-- <router-link class="menu--list-item" to="/details" v-bind:class="{'active': menuToggle}">
          <li>
            Details
          </li>
        </router-link> -->
        <router-link class="menu--list-item" to="/watching" v-bind:class="{'active': menuToggle}">
          <li>
            Watching
          </li>
        </router-link>
        <!-- <router-link class="menu--list-item" to="/fixed-watch-list" v-bind:class="{'active': menuToggle}">
          <li>
            Cities in Poland
          </li>
        </router-link>
        <router-link class="menu--list-item" to="/not-exist" v-bind:class="{'active': menuToggle}">
          <li>
            404
          </li>
        </router-link> -->
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return { menuToggle: false };
  },
  methods: {
    menuOpen() {
      this.menuToggle = !this.menuToggle;
    }
  }
};
</script>
<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";

.nav-container {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: flex-start;
  position: relative;
  @include normal {
    min-height: 3.7rem;
    position: unset;
  }
  .menu-opener {
    cursor: pointer;
    height: 3.7rem;
    min-width: 4rem;
    transition: 250ms all;
    user-select: none;
    top: 0;
    z-index: 5;
    * {
      box-sizing: border-box;
    }
    &:hover {
      background: get-color(4);
    }
    &.active {
      // background: get-color(2);
      &:hover {
        background: get-color(4);
      }
    }
    .menu-opener-inner {
      background: #fff;
      height: 0.5rem;
      margin-left: 0.7rem;
      margin-top: 1.6rem;
      width: 2.5rem;
      transition: 250ms all;
      &.active {
        background: transparent;
        &:before {
          transform: translateY(0rem) rotate(-45deg);
        }
        &:after {
          transform: translateY(-0.5rem) translateX(0rem) rotate(45deg);
        }
      }
      &:before {
        background: white;
        content: "";
        display: block;
        height: 0.5rem;
        width: 2.5rem;
        transform: translateY(-0.75rem);
        transition: 250ms all;
      }
      &:after {
        background: white;
        content: "";
        display: block;
        height: 0.5rem;
        width: 2.5rem;
        transform: translateY(0.25rem);
        transition: 250ms all;
      }
    }
  }
  .menu {
    display: flex;
    max-height: unset;

    position: absolute;
    height: 100%;
    width: 20%;
    transition: 350ms all;
    left: -21%;
    z-index: 2;
    @include font-size(3);
    @include normal {
      max-height: 3.7rem;
    }
    &.active {
      position: inherit;
      width: 100%;
      height: auto;
      transition: 350ms all;
      @include mobile {
        position: absolute;
        left: unset;
        top: 0;
      }
    }
    .menu--list {
      list-style: none;
      display: flex;
      width: 100%;
      padding: 0;
      margin: 0;
      @include mobile {
        flex-direction: column;
      }
      .menu--list-item {
        background: get-color(2);
        margin: 0;
        width: 100%;
        color: white;
        text-shadow: 2px 3px 0px rgba(150, 150, 150, 1);
        text-decoration: none;
        cursor: pointer;
        @include font-size(0.5);
        @extend %center-all;
        @include mobile {
          line-height: 2.2rem;
        }

        &.active {
          @include font-size(1.3);
          transition: 250ms all;
          @include mobile {
            border-top: 1px solid get-color(3);
            &:first-child {
              border-top: unset;
            }
          }
          &:active {
            @include font-size(1);
            transition: 250ms all;
          }
        }

        &:hover {
          background: get-color(3);
          transition: 250ms all;
          @include font-size(1.4);

          // a {

          //   @include font-size(1.5);
          //   transition: 250ms all;
          // }
        }
        a {
          text-decoration: none;
        }
        // a {
        //   color: white;
        //   @extend %center-all;
        //   @include font-size(0.5);
        //   transition: 250ms all;
        // }
      }
    }
  }
}

@keyframes slideIn {
  0% {
    position: relative;
    width: 0%;
  }
  5% {
    width: 0%;
  }
  100% {
    width: 100%;
    position: inherit;
  }
}
</style>

