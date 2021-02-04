<template>
  <div>
    <div class="clock">
      <div class="hour" ref="hour"></div>
      <div class="min" ref="min"></div>
      <div class="sec" ref="sec"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {

    setInterval(() => {
      this.getDate()
    }, 1000);

  },

  methods: {
    getDate() {
      let timeDate = new Date();
      /**时针转的度数 */
      let hoursDate = timeDate.getHours() * 30;
      /**分针转的度数 */
      let minutesDate = timeDate.getMinutes() * 6;
      /**秒针转的度数 */
      let secondsDate = timeDate.getSeconds() * 6;
      this.$refs['hour'].style.transform = `translate(-50%,-50%) rotateZ(${hoursDate + timeDate.getMinutes() * 0.5}deg)`
      this.$refs['min'].style.transform = `translate(-50%,-50%) rotateZ(${minutesDate}deg)`
      this.$refs['sec'].style.transform = `translate(-50%,-50%) rotateZ(${secondsDate}deg)`
    }
  }

}
</script>

<style lang='scss' scoped>
.clock {
  width: 400px;
  height: 400px;
  background-image: url("../assets/image/clock.png");
  background-size: 100% 100%;
  box-shadow: inset 0 0px 10px 6px rgba(255, 255, 255, 0.5),
    0 0px 25px rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  background-color: aquamarine;

  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  position: relative;
}
.clock::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  transform: translate(-50%, -50%);
  background-color: #fffae6;
  border-radius: 50%;
  z-index: 4;

  border: 2px solid #c9d8cd;
}
/**时针 */
.hour {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 170px;
  background-image: linear-gradient(360deg, transparent 50%, #ff9900 50%);
  transform: translate(-50%, -50%);
  border-radius: 8px;
  /*设置旋转的基点 */
  transform-origin: center;
}
/**分针 */
.min {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 250px;
  background-image: linear-gradient(360deg, transparent 50%, #00b7ff 50%);
  transform: translate(-50%, -50%);
  border-radius: 5px;
  z-index: 1;
  transform-origin: center;
}
/**秒针 */
.sec {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 280px;
  background-image: linear-gradient(360deg, transparent 30%, #edf3eb 30%);
  transform: translate(-50%, -50%);
  border-radius: 3px;
  z-index: 2;
  transform-origin: center;
}
</style>