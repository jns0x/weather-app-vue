<template>
  <div class="nav-container">
    <nav class="menu-opener" v-on:click="menuOpen()" v-bind:class="{'active': menuToggle }">
      <div class="menu-opener-inner" v-bind:class="{'active': menuToggle}"></div>
    </nav>
    <nav class="menu" v-bind:class="{'active': menuToggle}">
      <ul class="menu--list">
        <li class="menu--list-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="menu--list-item">
          <router-link to="/bar">404</router-link>
        </li>
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
  height: 5rem;
  display: flex;
  justify-content: flex-start;

  .menu-opener {
    cursor: pointer;
    height: 3.7rem;
    width: 4rem;
    transition: 250ms all;
    user-select: none;
    top: 0;
    * {
      box-sizing: border-box;
    }
    &:hover {
      background: get-color(1);
    }
    &.active {
      background: get-color(1);
    }
    .menu-opener-inner {
      background: #fff;
      height: 0.5rem;
      margin-left: 0.5rem;
      margin-top: 1.5rem;
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
    width: 100%;
    max-height: 3.7rem;
    position: absolute;
    left: -20vw;
    width: 0%;
    &.active {
      position: inherit;
      width: 100%;
      transition: 250ms all ease-in-out;
    }
    .menu--list {
      list-style: none;
      display: flex;
      width: 100%;
      padding: 0;
      margin: 0;
      .menu--list-item {
        padding: 0.2rem;
        background: get-color(1);
        margin: 0;
        width: 100%;
        @extend %center-all;
        a {
          color: white;
          text-decoration: white;
          width: 100%;
          height: 100%;
          vertical-align: middle;
          @extend %center-all;
          &:hover {
            background: get-color(3);
            transition: 250ms all;
          }
        }
      }
    }
  }
}
</style>

