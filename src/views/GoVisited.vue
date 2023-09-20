<template>
	<div>
		<h1>Посещенные станции</h1>
		<div>
			<GoTable :headings="tableHeadings" :columnTemplates="tableSizeColumns">
				<GoTableRow v-for="book of books" :key="book.id" :columnTemplates="tableSizeColumns">
					<GoTableColumn :columnTitle="tableHeadings[0]">{{ book.id }}</GoTableColumn>
					<GoTableColumn :columnTitle="tableHeadings[1]">{{ book.author }}</GoTableColumn>
					<GoTableColumn :columnTitle="tableHeadings[2]">{{ book.title }}</GoTableColumn>
					<GoTableColumn :srcImage="book.image" :altImage="book.title" isImage></GoTableColumn>
					<GoTableColumn><GoButton label="Read" /></GoTableColumn>
				</GoTableRow>
			</GoTable>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import GoTable from '@/components/table/GoTable.vue';
import GoTableRow from '@/components/table/GoTableRow.vue';
import GoTableColumn from '@/components/table/GoTableColumn.vue';
import GoButton from '@/components/controls/GoButton.vue';

const tableHeadings = ['Id', 'Author', 'Title', 'Cover', ''];
const tableSizeColumns = '50px 1fr 2fr 150px 140px';

const books = ref([
	{
		id: 1,
		author: 'Dmitry Glukhovsky',
		title: 'Metro 2033',
		image:
			'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81pNKLAG-cL._AC_UY436_FMwebp_QL65_.jpg',
		bg: '#FFA26B',
	},
	{
		id: 12,
		author: 'James Clear',
		title: 'Atomic Habits: An Easy',
		image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
		bg: '#00C48C',
	},
	{
		id: 2,
		author: 'J. K. Rowling',
		title: 'Harry Potter and the Order of the Phoenix',
		image:
			'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
		bg: '#00C48C',
	},
]);
</script>

<style scoped lang="less"></style>
