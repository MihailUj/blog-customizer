import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useState } from 'react';

import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType,
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { FormData } from 'src/index';

interface ArticleParamsFormProps {
	onFormDataSubmit: (formData: FormData) => void;
}

export const ArticleParamsForm: React.FC<ArticleParamsFormProps> = ({
	onFormDataSubmit,
}) => {
	const [form, setForm] = useState<ArticleStateType>(defaultArticleState);

	const [isOpen, isOpenSet] = useState(false);

	function handleOnSubmitForm(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData: FormData = {
			fontFamily: form.fontFamilyOption.value,
			fontSize: form.fontSizeOption.value,
			fontColor: form.fontColor.value,
			backgroundColor: form.backgroundColor.value,
			contentWidth: form.contentWidth.value,
		};
		onFormDataSubmit(formData);
	}

	function handleResetForm() {
		const formData: FormData = {
			fontFamily: defaultArticleState.fontFamilyOption.value,
			fontSize: defaultArticleState.fontSizeOption.value,
			fontColor: defaultArticleState.fontColor.value,
			backgroundColor: defaultArticleState.backgroundColor.value,
			contentWidth: defaultArticleState.contentWidth.value,
		};
		setForm(defaultArticleState);
		onFormDataSubmit(formData);
	}

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => isOpenSet(!isOpen)} />
			<aside
				className={
					isOpen
						? `${styles.container} ${styles.container_open}`
						: styles.container
				}>
				<form className={styles.form} onSubmit={handleOnSubmitForm}>
					<Text as={'h2'} size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={form.fontFamilyOption}
						onChange={(option: OptionType) =>
							setForm((prev) => ({ ...prev, fontFamilyOption: option }))
						}
						title='шрифт'
					/>

					<RadioGroup
						name='font-size'
						options={fontSizeOptions}
						selected={form.fontSizeOption}
						onChange={(option: OptionType) =>
							setForm((prev) => ({ ...prev, fontSizeOption: option }))
						}
						title='Размер шрифта'
					/>

					<Select
						options={fontColors}
						selected={form.fontColor}
						onChange={(option: OptionType) =>
							setForm((prev) => ({ ...prev, fontColor: option }))
						}
						title='Цвет шрифта'
					/>

					<Separator />

					<Select
						options={backgroundColors}
						selected={form.backgroundColor}
						onChange={(option: OptionType) =>
							setForm((prev) => ({ ...prev, backgroundColor: option }))
						}
						title='Цвет фона'
					/>

					<Select
						options={contentWidthArr}
						selected={form.contentWidth}
						onChange={(option: OptionType) =>
							setForm((prev) => ({ ...prev, contentWidth: option }))
						}
						title='Ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={handleResetForm}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
			<div
				className={styles.overlay}
				onClick={() => isOpenSet(false)}
				hidden={!isOpen}></div>
		</>
	);
};
