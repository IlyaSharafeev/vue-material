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
    <ScrollIndicator/>
    <ScrollToTop/>
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
import ScrollIndicator from "@/components/Scrolls/ScrollIndicator";
import ScrollToTop from "@/components/Scrolls/ScrollToTop";

export default {
  name: 'App',
  components: {
    ScrollToTop,
    ScrollIndicator,
    SwitchTheme,
    NewsCrypto,
    Divider,
    StartTrading,
    VipProgram,
    WhyBTCMarkets,
    StatisticMarkets,
    MainSlide,
    Header
  }
}
</script>

<style lang="scss">
.wrapper {
  padding: 32px 32px 66px;
}
</style>
