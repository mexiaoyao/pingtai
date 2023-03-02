<template>
    <div>
        <a-row>
            <div style="width:500px; height:100px; margin-top: 20px;">
                <Philosophy />
            </div>
        </a-row>
        <a-row :gutter="[16, 16]">
            <a-col :span="12">
                <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false">
                    <template v-for="(item, index) in list">
                        <a-list-item :key="index"><span class="c_white">{{ index + 1 }}、{{ item.title
                        }}</span></a-list-item>
                    </template>
                </a-list>
            </a-col>
            <a-col :span="12">
                <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false">
                    <template v-for="(item, index) in list1">
                        <a-list-item :key="index"><span class="c_white">{{ index + 1 }}、{{ item.title
                        }}</span></a-list-item>
                    </template>
                </a-list>
            </a-col>
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
                { title: "2023全国春播地图出炉 一图看春播的进度条到哪了" },
                { title: "春为岁首，农为先行。进入雨水节气，草木萌动，万物复苏，一年一度的春耕春播正由南到北在祖国大地上展开。" },
                { title: "全国春播地图 看大江南北春播差异有多大" },
                { title: "春播一粒粟，秋收万颗子。春播是全年农业生产的第一战，春播粮食面积占全年的一半以上，对全年粮食生产供给起着决定性作用。" },
                { title: "根据中国天气网发布的2023全国春播地图可以看出，今年我国春播在2月下旬陆续开始，由南至北持续至5月上中旬。" },
                { title: "华南是我国春播开始最早的地区，海南岛、台湾岛两大宝岛" },
                { title: "3月下旬到4月上旬，江南、江淮、江汉一带的农田逐渐热闹起来" },
                { title: "月的西北地区虽然还是春寒料峭，但土豆、春小麦的播种已经率先开始了" },
                { title: "4月中下旬，春天大踏步北上" },
                { title: "春播看天时 今春气象条件总体利于春耕春播" },
            ],
            list1: [
                { title: "华南是我国春播开始最早的地区，海南岛、台湾岛两大宝岛" },
                { title: "3月下旬到4月上旬，江南、江淮、江汉一带的农田逐渐热闹起来" },
                { title: "月的西北地区虽然还是春寒料峭，但土豆、春小麦的播种已经率先开始了" },
                { title: "4月中下旬，春天大踏步北上" },
                { title: "春播看天时 今春气象条件总体利于春耕春播" },
                { title: "2023全国春播地图出炉 一图看春播的进度条到哪了" },
                { title: "春为岁首，农为先行。进入雨水节气，草木萌动，万物复苏，一年一度的春耕春播正由南到北在祖国大地上展开。" },
                { title: "全国春播地图 看大江南北春播差异有多大" },
                { title: "春播一粒粟，秋收万颗子。春播是全年农业生产的第一战，春播粮食面积占全年的一半以上，对全年粮食生产供给起着决定性作用。" },
                { title: "根据中国天气网发布的2023全国春播地图可以看出，今年我国春播在2月下旬陆续开始，由南至北持续至5月上中旬。" },
            ],
        };
    },
};
</script>