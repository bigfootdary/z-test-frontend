<template>
    <div class="container__news">
        <div class="container__news__wrapper news">
            <div class="news__item item">
                <img src="../../../../api/news/photo.jpg" alt="" />
                <div class="item__date date">
                    <div class="date__wrapper">
                        <span>27.05.2018</span>
                    </div>
                </div>
                <div class="item__title">
                    Операционные результаты Зебры за 2-ой квартал 2018 года
                </div>
                <div class="item__tag tag">
                    <div class="tag__wrapper">
                        <span>В центре внимания</span>
                    </div>
                </div>
            </div>
            <div class="news__item">
                <div class="item__date date">
                    <div class="date__wrapper">
                        <span>27.05.2018</span>
                    </div>
                </div>
                <div class="item__title">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus, repellat asperiores ab laboriosam molestias aperiam
                    fugit consequuntur! Praesentium, libero ipsam.
                </div>
                <div class="item__tag tag">
                    <div class="tag__wrapper">
                        <span>Корпоративные новости</span>
                    </div>
                </div>
            </div>
            <div class="news__item">
                <div class="item__date date">
                    <div class="date__wrapper">
                        <span>27.05.2018</span>
                    </div>
                </div>
                <div class="item__title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, vero.
                </div>
                <div class="item__tag tag">
                    <div class="tag__wrapper">
                        <span>Корпоративные новости</span>
                    </div>
                </div>
            </div>
            <div class="news__item">
                <div class="item__date date">
                    <div class="date__wrapper">
                        <span>27.05.2018</span>
                    </div>
                </div>
                <div class="item__title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat officiis fugit nulla voluptates veritatis nemo, eaque
                    sint quod rerum, beatae similique fuga id vitae quia modi
                    omnis molestiae dicta corrupti!
                </div>
                <div class="item__tag tag">
                    <div class="tag__wrapper">
                        <span>Корпоративные новости</span>
                    </div>
                </div>
            </div>
            <div class="news__item">
                <div class="item__date date">
                    <div class="date__wrapper">
                        <span>27.05.2018</span>
                    </div>
                </div>
                <div class="item__title">
                    Зебра объявляет об изменениях в составе Совета директоров
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, atque.
                </div>
                <div class="item__tag tag">
                    <div class="tag__wrapper">
                        <span>Корпоративные новости</span>
                    </div>
                </div>
            </div>
            <div class="news__item">
                <div class="item__date date">
                    <div class="date__wrapper">
                        <span>27.05.2018</span>
                    </div>
                </div>
                <div class="item__title">
                    Зебра объявляет об изменениях в составе Совета директоров
                </div>
                <div class="item__tag tag">
                    <div class="tag__wrapper">
                        <span>Корпоративные новости</span>
                    </div>
                </div>
            </div>
            <div class="news__item">
                <div class="item__date date">
                    <div class="date__wrapper">
                        <span>27.05.2018</span>
                    </div>
                </div>
                <div class="item__title">
                    Зебра объявляет об изменениях в составе Совета директоров
                </div>
                <div class="item__tag tag">
                    <div class="tag__wrapper">
                        <span>Корпоративные новости</span>
                    </div>
                </div>
            </div>
            <div class="news__item">
                <div class="item__date date">
                    <div class="date__wrapper">
                        <span>27.05.2018</span>
                    </div>
                </div>
                <div class="item__title">
                    Зебра объявляет об изменениях в составе Совета директоров
                </div>
                <div class="item__tag tag">
                    <div class="tag__wrapper">
                        <span>Корпоративные новости</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="news__button">
            <input
                type="button"
                class="button--more-news"
                value="Загрузить еще"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'list'
}
</script>

<style lang="scss">
.news__button {
    margin-top: 20px;
}

.news {
    display: grid;
    gap: $grid-margin;
    justify-content: space-between;
    grid-template-columns: repeat(3, 1fr);
}
.news__item {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    padding: 24px;
    min-height: 254px;
    height: 100%;
    background-color: $alabaster;
    &:first-child {
        grid-column: 1 / 3;
        padding: 32px 24px 24px 24px;
        background-color: transparent;
        & .item__title {
            order: 3;
            margin: 0;
            font-size: $title-size;
            line-height: $title-size * 1.289;
            color: $white;
            text-transform: uppercase;
        }
        & .item__tag {
            order: 2;
            margin-bottom: 10px;
        }
        & .tag__wrapper {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            color: $white;
            font-size: $teta-size;
            font-weight: 700;
            border: 1px solid $white;
            border-radius: 2px;
            text-transform: uppercase;
        }
    }
}
.date__wrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: $white;
    font-size: $teta-size;
    background-color: $dark-grey;
    border-radius: 2px;
    span {
        padding: 2px 8px;
    }
}
.item img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.item__title {
    margin-top: 30px;
    margin-bottom: 46px;
    font-weight: 400;
    font-size: $gamma-size;
    line-height: $gamma-size * 1.172;
    color: $black;
}
.item__tag {
    margin-top: auto;
}
.tag__wrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: $cool-gray;
    font-size: $teta-size;
    font-weight: 700;
    border: 1px solid $cool-gray-light;
    border-radius: 2px;
}
.tag__wrapper span {
    padding: 0px 5px;
}
</style>
