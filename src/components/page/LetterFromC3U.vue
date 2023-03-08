<template>
    <div class="w_100_p">
        <a-row class="w_100_p">
            <div class="letter_from_c3u">
                <LetterFromC3U />
            </div>
            <div class="m_h2">Letter From C3U</div>
            <div class="title_botom_bor m_t_20 m_b_20"></div>
        </a-row>
        <a-row :gutter="[16, 2]" class="w_100_p list_new_bottom">
            <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false">
                <template v-for="(item, index) in list">
                    <a-list-item :key="index">
                        <a-row :gutter="[16, 0]">
                            <a-col :sm="12"  :xs="24">
                                <p class="f_S_16 c_white font_weiruanyahei font_text_indent_2em l_h_36 p_b_0 m_b_0">{{ item.en }}</p>
                            </a-col>
                            <a-col :sm="12" :xs="24">
                                <p class="f_S_16 c_white font_weiruanyahei font_text_indent_2em l_h_36 p_b_0 m_b_0">{{ item.cn }}</p>
                            </a-col>
                        </a-row>
                    </a-list-item>
                </template>
            </a-list>
        </a-row>
    </div>
</template>
<script>
import LetterFromC3U from '@/components/letter/LetterFromC3U'
export default {
    name: "LetterFromC3U-page",
    components: {
        LetterFromC3U,
    },
    data() {
        return {
            list: [
                {
                    en: "The journey began with an unplanned meeting in Xiamen, China. The first time I met Kevin we reached a consensus that more and more Asian founders build startups globally, and Asian market is increasingly embracing the third generation of Internet development. Kevin, who has lived in Silicon Valley and Southeast Asia for many years, and I, who have worked in Singapore and Japan markets, realize that we can do something to support these entrepreneurs participate in the next era of ‘Internet migration’. ",
                    cn: "故事的开始源于在厦门一次未经安排的见面。那是我第一次见到Kevin，在那次短暂的交流中我们很快达成共识，越来越多的亚洲创业者希望到海外发展项目，亚洲市场也在积极拥抱互联网的第三次新发展。在硅谷和东南亚生活多年的Kevin,和有着新加坡与日本工作经历的我，意识到我们可以做些什么去支持创业者们参与到下一个互联网发展的大迁徙时代。"
                },
                {
                    en: "Some people's trust needs to be built on the basis of years, and some people's trust needs to be built on the basis of \"heart\". Kevin and I are naturally willing to trust others. Investment is based on \"belief\", same for partnership. We built trust in each other, the idea of starting C3U came to our minds. I name the fund C3U - ‘I see you in a new Web’. Making investment is a ‘hit-it-off’ moment, I ‘see’ you in my eyes and decide ",
                    cn: "有些人的信任是需要以年为单位来建立，游戏人的信任是需要以“心”为单位来建立。 Kevin和我都是天然地愿意去相信他人，投资以“信”为本，识人亦如此。我们建立了对彼此的信任，成立C3U的想法开始构建。我给新基金取名为C3U – “I SEE you in a new Web”, 它融合了“缘分‘、’信任‘和对互联网新迭代的无限期许。我们的经历和认知指引我们去把C3Uj建立成为这样一个社群："
                },
            ],
        };
    },
};
</script>
<style lang="less">
.letter_from_c3u{
    width:300px; height:100px; margin-top: 20px;
}
.list_new_bottom{
    .ant-list-grid .ant-col > .ant-list-item{
        margin-bottom: 0px;
    }
}
@media screen and (max-width: 576px){
    .letter_from_c3u{
        display: none;
    }
}
</style>