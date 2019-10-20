<template>
    <div class="image-list-container">
        <ul class="image-list">
            <li v-for="img in imageList" :key="img">
                <img :src="img" alt="">
            </li>
        </ul>

        <photo-swipe :imageList="imageList"></photo-swipe>
    </div>
</template>
<script>
import PhotoSwipe from './components/PhotoSwipe'
export default {
    data () {
        return {
            imageList: [
                'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/02/05/ChMkJld03bSIAGLrAApFyizpCIsAATGhAOK7aQACkXi563.jpg',
                'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/02/05/ChMkJ1d03bOIQLe_AAmz7dm_f2QAATGhAK4wl0ACbQF911.jpg',
                'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/02/05/ChMkJ1d03bKIStjXAAr9G7FtIwMAATGhAHJ1KkACv0z897.jpg',
                'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/02/05/ChMkJld03a-IQNSyAAneumMbpb8AATGhAAm68wACd7S047.jpg',
                'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/02/05/ChMkJld03a2IcYquAAivU877m34AATGgwNjUdEACK9r813.jpg',
                'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/02/05/ChMkJ1d03ayIMNW1AAhlL5iEq9EAATGgwKeyEgACGVH666.jpg',
                'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/02/05/ChMkJld03aqIJotRAAizzrXmkekAATGgwGlY0QACLPm460.jpg',
                'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/02/05/ChMkJ1d03bCIJKmpAAiW1QZuZMAAATGhAEEKFoACJbt686.jpg',
                'https://desk-fd.zol-img.com.cn/t_s2560x1440c5/g5/M00/0B/0B/ChMkJliUSeGIEl1OAE3kmLDIl68AAZrNQDJMKcATeSw870.jpg',
                'https://desk-fd.zol-img.com.cn/t_s2560x1440c5/g5/M00/0B/0B/ChMkJliUSeqIGBJ9AFOLIrqhv2UAAZrNQFGjB0AU4s6557.jpg',
                'https://desk-fd.zol-img.com.cn/t_s2560x1440c5/g5/M00/0B/0B/ChMkJliUSfWIUiTcAE3kmLDIl68AAZrNQHAv6gATeSw553.jpg',
                'https://desk-fd.zol-img.com.cn/t_s2560x1440c5/g5/M00/0B/0B/ChMkJ1iUSfmIBOwyAFOLIrqhv2UAAZrNQIVdvIAU4s6875.jpg',
                'https://desk-fd.zol-img.com.cn/t_s2560x1440c5/g5/M00/0B/0B/ChMkJ1iUScaIRZf_AE2bE4ursecAAZrNANWBh8ATZsr777.jpg',
                'https://desk-fd.zol-img.com.cn/t_s1920x1200c5/g4/M09/0D/09/ChMlzF2dUMCIBfRjAAUfvNT20xIAAYEngD7jfAABR_U607.jpg',
                'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g1/M01/03/00/ChMljl2dULuIUsQDAAyXCiPCeyAAAP6SQL6MYYADJci975.jpg',
                'https://desk-fd.zol-img.com.cn/t_s1920x1200c5/g4/M08/0D/09/ChMly12dULaIRgm0AAnNa48ukWsAAYEnQOweAUACc2D101.jpg',
                'https://desk-fd.zol-img.com.cn/t_s1920x1200c5/g4/M09/0D/09/ChMly12dUM-IaPTMAAcZqkXtLqkAAYEngGFaV0ABxnC646.jpg'
            ]
        }
    },
    components: {
        PhotoSwipe
    },
    created () {

    },
    mounted () {

    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
    .image-list-container {
        width: 100%;
        .image-list {
            img {
                max-width: 100%;
            }
        }
    }
</style>
