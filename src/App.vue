<template>
  <div class="wrapper">
    <Header/>
    <MainSlide/>
    <StatisticMarkets/>
    <WhyBTCMarkets/>
    <VipProgram/>
    <StartTrading/>
    <Divider :top="106" :bottom="127"/>
    <NewsCrypto/>
    <SwitchTheme/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import MainSlide from "@/components/MainSlide";
import StatisticMarkets from "@/components/StatisticMarkets/StatisticMarkets";
import WhyBTCMarkets from "@/components/WhyBTCMarkets";
import VipProgram from "@/components/VipProgram";
import StartTrading from "@/components/StartTrading";
import Divider from "@/components/Divider";
import NewsCrypto from "@/components/NewsCryptoComponents/NewsCrypto";
import SwitchTheme from "@/components/SwitchTheme";
export default {
  name: 'App',
  components: {
    SwitchTheme,
    NewsCrypto,
    Divider,
    StartTrading,
    VipProgram,
    WhyBTCMarkets,
    StatisticMarkets,
    MainSlide,
    Header}
}
</script>

<style lang="scss">
.wrapper {
  padding: 32px 32px 66px;
}
</style>
