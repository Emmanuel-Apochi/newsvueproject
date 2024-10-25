import {  createStore } from "vuex";
import axios from "axios";
 
export default createStore ({
    state: {
       news: [],
       headline: [],
       selectedNewsdetails: [],
       selectedCategories: [],
    },

    getters: {
        news(state) {
            return state.news.length;
        },

        headline(state) {
            return state.headline.length;
        },
        selectedNewsdetails(state) {
            return state.selectedNewsdetails.length
        },
        selectedCategories(state) {
            return state.selectedCategories.length
        }
        },

    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },

        SET_HEADLINE(state, headline) {
            state.headline = headline;
        },

        SET_SELECTED_NEWSDETAILS(state, newsdetails) {
            state.selectedNewsdetails = newsdetails;
        },

        SET_SELECTED_CATEGORIES(state, categories) {
            state.selectedCategories = categories;
        },

    },

    actions: {
        async fetchHeadline({ commit }) {
            const response = await axios.get("https://alvahtek.com/projects/ota/api/news-api/news.php?type=headline");
            commit("SET_HEADLINE", response.data);
        },
        async fetchNews({ commit }) {
            const response = await axios.get("https://alvahtek.com/projects/ota/api/news-api/news.php");
            commit("SET_NEWS", response.data);
        },
        async fetchNewsdetailsByUuid({ commit }, uuid) {
        const response = await axios.get(`https://alvahtek.com/projects/ota/api/news-api/news.php?uuid=${uuid}`);
            commit("SET_SELECTED_NEWSDETAILS", response.data);
        },

        async fetchCategoriesByCategories({ commit }, category) {
            const response = await axios.get(`https://alvahtek.com/projects/ota/api/news-api/news.php?category=${category}`);
            commit("SET_SELECTED_CATEGORIES", response.data);
        },
    }
});