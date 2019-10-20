<template>
    <div class="photo-swipe-container">
        <div class="my-gallery">
            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" v-for="(img, i) in imageList" :key="i">
                <a :href="img" itemprop="contentUrl" data-size="500x753">
                    <img :src="img" itemprop="thumbnail" alt="Image description" />
                </a>
                <figcaption itemprop="caption description">Image caption {{i + 1}}</figcaption>
            </figure>
        </div>
        <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="pswp__bg"></div>

            <div class="pswp__scroll-wrap">
                <div class="pswp__container">
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                </div>
                <div class="pswp__ui pswp__ui--hidden">
                    <div class="pswp__top-bar">
                        <div class="pswp__counter"></div>
                        <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                        <button class="pswp__button pswp__button--share" title="Share"></button>
                        <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                        <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                        <div class="pswp__preloader">
                            <div class="pswp__preloader__icn">
                                <div class="pswp__preloader__cut">
                                    <div class="pswp__preloader__donut"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div class="pswp__share-tooltip"></div>
                    </div>

                    <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                    <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>

                    <div class="pswp__caption">
                        <div class="pswp__caption__center"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PhotoSwipe from 'photoswipe'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
export default {
    props: {
    },
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
    computed: {

    },
    created () {

    },
    mounted () {
        var initPhotoSwipeFromDOM = function (gallerySelector) {
            var parseThumbnailElements = function (el) {
                var thumbElements = el.childNodes,
                    numNodes = thumbElements.length,
                    items = [],
                    figureEl,
                    linkEl,
                    size,
                    item
                for (var i = 0; i < numNodes; i++) {
                    figureEl = thumbElements[i]
                    if (figureEl.nodeType !== 1) {
                        continue
                    }
                    linkEl = figureEl.children[0]
                    size = linkEl.getAttribute('data-size').split('x')
                    item = {
                        src: linkEl.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10)
                    }
                    if (figureEl.children.length > 1) {
                        item.title = figureEl.children[1].innerHTML
                    }
                    if (linkEl.children.length > 0) {
                        item.msrc = linkEl.children[0].getAttribute('src')
                    }
                    item.el = figureEl
                    items.push(item)
                }
                return items
            }
            var closest = function closest (el, fn) {
                return el && (fn(el) ? el : closest(el.parentNode, fn))
            }
            var onThumbnailsClick = function (e) {
                e = e || window.event
                e.preventDefault ? e.preventDefault() : e.returnValue = false
                var eTarget = e.target || e.srcElement
                var clickedListItem = closest(eTarget, function (el) {
                    return (el.tagName && el.tagName.toUpperCase() === 'FIGURE')
                })
                if (!clickedListItem) {
                    return
                }
                var clickedGallery = clickedListItem.parentNode,
                    childNodes = clickedListItem.parentNode.childNodes,
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index
                for (var i = 0; i < numChildNodes; i++) {
                    if (childNodes[i].nodeType !== 1) {
                        continue
                    }
                    if (childNodes[i] === clickedListItem) {
                        index = nodeIndex
                        break
                    }
                    nodeIndex++
                }
                if (index >= 0) {
                    openPhotoSwipe(index, clickedGallery)
                }
                return false
            }
            var photoswipeParseHash = function () {
                var hash = window.location.hash.substring(1),
                    params = {}
                if (hash.length < 5) {
                    return params
                }
                var vars = hash.split('&')
                for (var i = 0; i < vars.length; i++) {
                    if (!vars[i]) {
                        continue
                    }
                    var pair = vars[i].split('=')
                    if (pair.length < 2) {
                        continue
                    }
                    params[pair[0]] = pair[1]
                }
                if (params.gid) {
                    params.gid = parseInt(params.gid, 10)
                }
                return params
            }
            var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
                var pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    options,
                    items
                items = parseThumbnailElements(galleryElement)
                options = {
                    galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                    getThumbBoundsFn: function (index) {
                        var thumbnail = items[index].el.getElementsByTagName('img')[0],
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect()
                        return {
                            x: rect.left,
                            y: rect.top + pageYScroll,
                            w: rect.width
                        }
                    }
                }
                if (fromURL) {
                    if (options.galleryPIDs) {
                        for (var j = 0; j < items.length; j++) {
                            if (items[j].pid === index) {
                                options.index = j
                                break
                            }
                        }
                    } else {
                        options.index = parseInt(index, 10) - 1
                    }
                } else {
                    options.index = parseInt(index, 10)
                }
                if (isNaN(options.index)) {
                    return false
                }
                if (disableAnimation) {
                    options.showAnimationDuration = 0
                }
                gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options)
                gallery.init()
            }
            var galleryElements = document.querySelectorAll(gallerySelector)
            for (var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute('data-pswp-uid', i + 1)
                galleryElements[i].onclick = onThumbnailsClick
            }
            var hashData = photoswipeParseHash()
            if (hashData.pid && hashData.gid) {
                openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true)
            }
        }

        initPhotoSwipeFromDOM('.my-gallery')
    }
}
</script>

<style lang="scss" scoped>

</style>
