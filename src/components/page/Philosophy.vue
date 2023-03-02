<template>
    <div>
        <a-row>
            <div style="width:500px; height:100px; margin-top: 20px;">
                <Philosophy />
            </div>
        </a-row>
        <a-row :gutter="[16, 16]">
            <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false">
                <template v-for="(item, index) in list">
                    <a-list-item :key="index">
                        <a-row :gutter="[16, 16]">
                            <a-col :span="12">
                                <span class="f_S_16 c_white font_weiruanyahei">{{ item.en}}</span>
                            </a-col>
                            <a-col :span="12">
                                <span class="f_S_16 c_white font_weiruanyahei">{{ item.cn}}</span>
                            </a-col>

                        </a-row>
                    </a-list-item>
                </template>
            </a-list>
        </a-row>
    </div>
</template>
<script>
import Philosophy from '@/components/letter/Philosophy'
export default {
    name: "Philosophy-page",
    components: {
        Philosophy,
    },
    data() {
        return {
            list: [
                {
                     en: "We choose to support founders with creativity, foresight, boundary-pushing, inclusiveness, and consideration for a better world",
                     cn: "我们选择支持具有创造力、行业远见、勇于突破边界、善于包容和对更美好未来充满向往的创始人" 
                },
                { 
                    en: "We choose to make investments designed to tackle key issues faced by current web3 industry, i.e. infrastructure, security, popularity, optimization capability",
                    cn: "我们选择投资那些即将改善或解决当前 Web3 行业面临的关键问题的项目，例如：基础设施、安全性、流行度、优化能力 "
                
                },
                { 
                    en: "We give trust, win trust and enable ‘programmable trust’ to achieve a more cooperative and enduring society",
                    cn: "我们给予信任，赢得信任，并助力“可编程信任”去构建一个更加合作与持久的社会 "
                
                },
                { 
                    en: "We embrace the changes which proactively take on the industrial challenges faced by new generation and continuously bring in innovations",
                    cn: "我们拥抱变化，积极应对新一代用户面临的行业挑战，不断推陈出新"
                },
            ],
        };
    },
};
</script>