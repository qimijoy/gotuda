<!--import GoTable from '@/components/table/GoTable.vue';-->
<!--import GoTableRow from '@/components/table/GoTableRow.vue';-->
<!--import GoTableColumn from '@/components/table/GoTableColumn.vue';-->
<!--import GoButton from '@/components/controls/GoButton.vue';-->

<!--const tableHeadings = ['Id', 'Author', 'Title', 'Cover', ''];-->
<!--const tableSizeColumns = '50px 1fr 2fr 150px 140px';-->

<!--<GoTable :headings="tableHeadings" :columnTemplates="tableSizeColumns" @sorting="setSort">-->
<!--<GoTableRow-->
<!--	v-for="book of booksSorting"-->
<!--	:key="book.id"-->
<!--	:columnTemplates="tableSizeColumns"-->
<!--	:rowBackgroundColor="book.bg"-->
<!--&gt;-->
<!--	<GoTableColumn :columnTitle="tableHeadings[0]">{{ book.id }}</GoTableColumn>-->
<!--	<GoTableColumn :columnTitle="tableHeadings[1]">{{ book.author }}</GoTableColumn>-->
<!--	<GoTableColumn :columnTitle="tableHeadings[2]">{{ book.title }}</GoTableColumn>-->
<!--	<GoTableColumn :srcImage="book.image" :altImage="book.title" isImage></GoTableColumn>-->
<!--	<GoTableColumn><GoButton label="Read" /></GoTableColumn>-->
<!--</GoTableRow>-->
<!--</GoTable>-->

<!--// States-->
<!--const sortField = ref('id');-->
<!--const sortDir = ref('ASC');-->
<!--const books = ref([-->
<!--{-->
<!--id: 1,-->
<!--author: 'Dmitry Glukhovsky',-->
<!--title: 'Metro 2033',-->
<!--image:-->
<!--'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81pNKLAG-cL._AC_UY436_FMwebp_QL65_.jpg',-->
<!--bg: '#FFA26B',-->
<!--},-->
<!--{-->
<!--id: 12,-->
<!--author: 'James Clear',-->
<!--title: 'Atomic Habits: An Easy',-->
<!--image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',-->
<!--bg: '#00C48C',-->
<!--},-->
<!--{-->
<!--id: 2,-->
<!--author: 'J. K. Rowling',-->
<!--title: 'Harry Potter and the Order of the Phoenix',-->
<!--image:-->
<!--'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',-->
<!--bg: '#106ea8',-->
<!--},-->
<!--]);-->

<!--// Computed-->
<!--const booksSorting = computed(() => {-->
<!--return [...books.value].sort((a, b) => {-->
<!--let modifier = 1;-->

<!--if (sortDir.value === 'DESC') {-->
<!--modifier = -1;-->
<!--} else if (sortDir.value === 'ASC') {-->
<!--modifier = 1;-->
<!--}-->

<!--if (a[sortField.value] < b[sortField.value]) return -1 * modifier;-->
<!--if (a[sortField.value] > b[sortField.value]) return modifier;-->
<!--return 0;-->
<!--});-->
<!--});-->

<!--// Functions-->
<!--const setSort = (name) => {-->
<!--if (sortField.value === name) {-->
<!--if (sortDir.value === 'ASC') {-->
<!--sortDir.value = 'DESC';-->
<!--} else if (sortDir.value === 'DESC') {-->
<!--sortDir.value = 'ASC';-->
<!--}-->
<!--} else {-->
<!--sortField.value = name;-->
<!--sortDir.value = 'ASC';-->
<!--}-->
<!--};-->

<template>
	<div class="table">
		<div class="table__container">
			<div class="table__headings" :style="{ 'grid-template-columns': columnTemplates }">
				<div class="table__heading-name" v-for="heading of headings" :key="heading" @click="clickOnHead(heading)">
					{{ heading }}
				</div>
			</div>
			<slot></slot>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	headings: {
		type: Array,
	},
	columnTemplates: {
		type: String,
	},
});

const emits = defineEmits(['sorting']);

// Functions
const clickOnHead = (columnName) => {
	emits('sorting', columnName.toLowerCase());
};
</script>

<style scoped lang="less">
@import '@/assets/styles/_palette';
@import '@/assets/styles/_breakpoints';

.table {
	display: flex;
	justify-content: center;

	&__container {
		background-color: @white;
		width: 100%;
		margin-bottom: 40px;
		margin-top: 15px;
	}

	&__headings {
		display: none;
		column-gap: 10px;
		align-items: center;
		border-bottom: 2px solid #eeeff4;
		background: @white;
		padding: 5px 16px;

		@media @medium {
			display: grid;
		}
	}

	&__heading-name {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		color: #999;
		cursor: pointer;
	}
}
</style>
