<template>
    <div class="w_100_p">
        <a-row class="w_100_p">
            <div class="about_te">
                <about />
            </div>
            <div class="m_h2">About</div>
            <div class="title_botom_bor m_t_20 m_b_20"></div>
        </a-row>
        <a-row :gutter="[16, 2]" class="w_100_p list_new_bottom">
            <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false">
                <template v-for="(item, index) in list">
                    <a-list-item :key="index">
                        <a-row :gutter="[16, 0]">
                            <a-col :sm="12" :xs="24">
                                <p class="f_S_16 c_white font_weiruanyahei font_text_indent_2em l_h_36 p_b_0 m_b_0">{{ item.en}}</p>
                            </a-col>
                            <a-col :sm="12" :xs="24">
                                <p class="f_S_16 c_white font_weiruanyahei font_text_indent_2em l_h_36 p_b_0 m_b_0">{{ item.cn}}</p>
                            </a-col>

                        </a-row>
                    </a-list-item>
                </template>
            </a-list>
        </a-row>
    </div>
</template>
<script>
import About from '@/components/letter/About'
export default {
    name: "about-page",
    components: {
        About,
    },
    data() {
        return {
            list: [
                {
                    en: "C3U backs next-gen Internet companies with disruptive technologies to define the future. Our focus is early-stage, Asian teams, and global footprint. We aim to et involved at the earliest stages of formation and continue supporting our portfolio companies.",
                    cn: "C3U 支持拥有定义未来的颠覆性技术的下一代互联网公司。我们重点关注早期阶段、亚洲团队和全球足迹。我们希望在公司成立的最早阶段就参与进来，并持续支持他们的发展。 " 
                },
                {
                    en: "We are a young-gen team to bridge the gap between web2 and web3. Kevin Wang (Linkedin) received his Master in Information System Management from Carnegie Mellon University, and spent nearly 10 years working in Silicon Valley as a Tech/product lead roles. Since 2017, Kevin joined Alibaba group and firstly worked with Ant Group for southeastern expansion . He turned to an investor by joining Alibaba strategic investment group and leading oversea web3.0/crypto investments. Kevin is deeply connected to Silicon Valley and Chinese IT industry through his time at tech companies in Bay area and Ant Group. He has developed a global perspective in web3 through leading web3 investments at Alibaba.",
                    cn: "我们是一个致力于融合 web2 和 web3 之间发展的年轻团队。 王琦 (Linkedin) 从卡内基梅隆大学获得信息系统管理硕士学位，并在硅谷工作了近 10 年，担任技术/产品负责人。 2017年加入阿里巴巴集团，前期在蚂蚁集团负责东南亚业务拓展，后加入阿里巴巴战略投资集团，主导海外web3.0/crypto投资。 Kevin 在湾区科技公司和蚂蚁集团任职期间，与硅谷和中国 IT 行业建立了深厚的链接，通过在阿里巴巴主导 web3 投资形成了在 web3 领域的全球视野。 " 
                },
            ],
        };
    },
};
</script>
<style lang="less">
.about_te{
    width:200px; height:50px;
}
.list_new_bottom{
    .ant-list-grid .ant-col > .ant-list-item{
        margin-bottom: 0px;
    }
}
@media screen and (max-width: 576px){
    .about_te{
        display: none;
    }
}
</style>