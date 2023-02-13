import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

//加载国际化中英文JSON文件，并读取为以文件名称为key,文件内容为对象的数组
function loadMessages(data) {
    const messages = {};
    data.keys().forEach(key => {
        const matched = key.match(/([\w-]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = data(key);
        }
    });

    return messages;
}

const loadLocaleMessages = () => {
    //国家文件正则
    //文字国际化
    const message = require.context('./message', true, /[\w-,\s]+\.json$/i);
    const messageMsg = loadMessages(message);

    return messageMsg;
};

//获取语言
const getLang = () => {
    let defaultLang = process.env.VUE_APP_LANGUAGE || "zh"
    let browserLang = window.navigator.language.toLowerCase();
    let navigatorLang = (browserLang.includes("en") || browserLang.includes("us") || browserLang.includes("ma")) ? "en" : "zh";
    return navigatorLang || defaultLang;
}

export default new VueI18n({
    locale: getLang(),
    fallbackLocale: getLang(),
    messages: loadLocaleMessages()
});
