import { CSSProperties, useState } from 'react';
import { defaultArticleState } from 'src/constants/articleProps';

import styles from '../styles/index.module.scss';
import { ArticleParamsForm } from './article-params-form';
import { Article } from './article';

export interface FormData {
	fontFamily: string;
	fontSize: string;
	fontColor: string;
	backgroundColor: string;
	contentWidth: string;
}

export const App = () => {
	const [customStyles, setCustomStyles] = useState<FormData>({
		fontFamily: defaultArticleState.fontFamilyOption.value,
		fontSize: defaultArticleState.fontSizeOption.value,
		fontColor: defaultArticleState.fontColor.value,
		backgroundColor: defaultArticleState.backgroundColor.value,
		contentWidth: defaultArticleState.contentWidth.value,
	});

	return (
		<main
			className={styles.main}
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
