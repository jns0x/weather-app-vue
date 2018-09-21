<template>
  <div class="details-wrapper">
    <div class="details__row-days">
      <div class="details__column">
        <div class="details__column-time">Now</div>
        <div class="details__column-pic">Icon</div>
        <div class="details__column-temp">30C</div>
      </div>
      <div class="details__column">
        <div class="details__column-time">Now</div>
        <div class="details__column-pic">Icon</div>
        <div class="details__column-temp">30C</div>
      </div>
      <div class="details__column">
        <div class="details__column-time">Now</div>
        <div class="details__column-pic">Icon</div>
        <div class="details__column-temp">30C</div>
      </div>
    </div>
    <dic class="details__rows">
      <div class="details__rows-row">
        <div class="details__rows-row-day">Sunday</div>
        <div class="details__rows-row-icon">Icon</div>
        <div class="details__rows-row-temp">30C</div>
      </div>
      <div class="details__rows-row">
        <div class="details__rows-row-day">Sunday</div>
        <div class="details__rows-row-icon">Icon</div>
        <div class="details__rows-row-temp">30C</div>
      </div>
      <div class="details__rows-row">
        <div class="details__rows-row-day">Sunday</div>
        <div class="details__rows-row-icon">Icon</div>
        <div class="details__rows-row-temp">30C</div>
      </div>
    </dic>

    <div class="row-week">

    </div>
  </div>

</template>
<script>
export default {
  name: "DetailsPanel"
};
</script>
<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
.details-wrapper {
  @extend %center-all;
  flex-direction: column;
  width: 100%;
  .details__row-days {
    @extend %center-all;
    border-top: 0.1rem solid get-color(5);
    padding: 0.5rem 0 0 0;
    margin: 0.5rem 0 0 0;
    box-sizing: border-box;
    width: 90%;
    .details__column {
      margin: 0 1rem;
    }
  }
  .details__rows {
    @extend %center-all;
    border-top: 0.1rem solid get-color(5);
    padding: 0.5rem 0 0 0;
    margin: 0.5rem 0 0 0;
    box-sizing: border-box;
    flex-direction: column;
    width: 90%;
    .details__rows-row {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
}
</style>


