import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

export interface FormData {
	fontFamily: string;
	fontSize: string;
	fontColor: string;
	backgroundColor: string;
	contentWidth: string;
}

const App = () => {
	const [customStyles, setCustomStyles] = useState<FormData>({
		fontFamily: defaultArticleState.fontFamilyOption.value,
		fontSize: defaultArticleState.fontSizeOption.value,
		fontColor: defaultArticleState.fontColor.value,
		backgroundColor: defaultArticleState.backgroundColor.value,
		contentWidth: defaultArticleState.contentWidth.value,
	});

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': customStyles.fontFamily,
					'--font-size': customStyles.fontSize,
					'--font-color': customStyles.fontColor,
					'--container-width': customStyles.contentWidth,
					'--bg-color': customStyles.backgroundColor,
				} as CSSProperties
			}>
			<ArticleParamsForm
				onFormDataSubmit={(data: FormData) => setCustomStyles(data)}
			/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
