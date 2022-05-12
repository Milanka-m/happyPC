import type { NextPage } from "next"
import React from "react"
import Layout from "../../layout/Layout"
import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"
import {
	Snackbar
} from "../../components"
import styles from "../index.module.scss"
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import AppForm from "../../modules/views/AppForm"
import FormButton from "../../modules/form/FormButton"
import FormFeedback from "../../modules/form/FormFeedback"
import RFTextField from "../../modules/form/RFTextField"
import { Field, Form, FormSpy } from "react-final-form"
import { email, phone, required } from "../../modules/form/validation"
import { sendTelegramm } from "../../utils"
import ym from "react-yandex-metrika"
import withRoot from "../../modules/withRoot"

const StyledAutocomplete = styled(Autocomplete)({
	"& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
		color: '#8b8b8b',
	  },
	"& .MuiAutocomplete-inputRoot": {
		color: "#000",
		"& .MuiOutlinedInput-notchedOutline": {
			borderColor: "green"
		},
		"&:hover .MuiOutlinedInput-notchedOutline": {
			borderColor: '#f7bd17'
		},
		"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
			border: '1px solid #7e2323',
		},
		"&.MuiFormLabel-root .MuiInputLabel-root .Mui-focused": {
			color: "green",
		}
	}
  })

const OrderAssembly: NextPage = () => {
	const options1 = ['Индивидуальная сборка', 'Комплектация на выбор Happy PC']
	const options2 = ['Intel', 'AMD']
	const options3 = ['Nvidia', 'Radeon', 'Без Видеокарты']
	const options4 = ['120GB', '240GB', '512GB', '1TB', '2TB', '4TB', 'Без SSD']
	const options5 = ['1TB', '2TB', '4TB', 'Без HDD']
	const options6 = [
		'80000 ₽ - 100000 ₽', 
		'100000 ₽ - 150000 ₽',
		'150000 ₽ - 350000 ₽', 
		'350000 ₽ - 500000 ₽', 
		'500000 ₽ - 750000 ₽', 
		'750000 ₽ - 1000000 ₽'
	]
	const [assembly, setAssembly] = React.useState('')
	const [videoCard, setVideoCard] = React.useState('')
	const [cpu, setCpu] = React.useState('')
	const [ssdCapacity, setSsdCapacity] = React.useState('')
	const [hhdCapacity, setHhdCapacity] = React.useState('')
	const [budget, setBudget] = React.useState('')

	const [openSnackBar, setOpenSnackBar] = React.useState<boolean>(false)
	const [sent, setSent] = React.useState<boolean>(false)

	const handleCloseSnackBar = (): void => {
		setOpenSnackBar((pre) => !pre)
	}

	const validate = (values: { [index: string]: string }) => {
		const errors = required([
			"firstName", 
			"phone", 
			"email", 
			"сaseColor", 
			"tasks",
		], values)

		if (!errors.phone) {
			const phoneError = phone(values.phone)
			if (phoneError) {
				errors.phone = phoneError
			}
		}

		if (!errors.email) {
			const emailError = email(values.email)
			if (emailError) {
				errors.email = emailError
			}
		}

		return errors
	}

	const handleSubmit = (values: { [name: string]: string }): void => {
		sendTelegramm(
			`Оформление заказа/услуги. %0AИмя: ${values.firstName}%0AТелефон: ${values.phone}%0AEmail: ${values.email}%0AЦвет корпуса: ${values.сaseColor}%0AЗадачи: ${values.tasks}%0AВыбранная сборка: ${assembly}%0AПроцессор: ${cpu}%0AВидеокарта: ${videoCard}%0AОбъём SSD-накопителя: ${ssdCapacity}%0AОбъём HDD-накопителя: ${hhdCapacity}%0AБюджет: ${budget}`,
		)
		setSent((pre) => !pre)
		setOpenSnackBar((pre) => !pre)
		ym('reachGoal', 'submit-form')
	}


	return (
		<>
			<Layout
				title='Закакзать сборку &nbsp;— HappyPC'
				desc='Закакзать сборку компьютера от счастливой мастерской HappyPC'
				ogTitle='Закакзать сборку &nbsp;— HappyPC'>
					<section className={styles.form}>
						<div className={styles.formContainer}>
							<AppForm>
								<Form
									onSubmit={handleSubmit}
									subscription={{ submitting: true }}
									validate={validate}
									>
									{({ handleSubmit: handleSubmit2, submitting }) => (
										<Box 
											component='form'
											onSubmit={handleSubmit2}
											noValidate
											sx={{
												display: 'flex',
												justifyContent: 'space-between',
												['@media(max-width: 800px)'] : {
													flexDirection: 'column',
													alignItems: 'center'
												}
											}}
										>
											<Box
												sx={{ 
													mt: 2,
													['@media(max-width: 800px)'] : {
														mt: 0,
													} 
												}}>
												<Field
													autoFocus
													component={RFTextField}
													disabled={submitting || sent}
													autoComplete='given-name'
													fullWidth
													label='Ваше имя'
													name='firstName'
													required
												/>
												<Field
													fullWidth
													component={RFTextField}
													disabled={submitting || sent}
													autoComplete='Phone'
													label='Ваш телефон (формата +7(000)-000-00-00)'
													margin='normal'
													name='phone'
													required
												/>
												<Field
													autoComplete='Email'
													component={RFTextField}
													disabled={submitting || sent}
													fullWidth
													label='Email'
													margin='normal'
													name='email'
													required
												/>
												<Field
													autoComplete='Text'
													component={RFTextField}
													disabled={submitting || sent}
													fullWidth
													label='Цвет корпуса'
													margin='normal'
													name='сaseColor'
													required
												/>
												<Field
													autoComplete='Text'
													component={RFTextField}
													disabled={submitting || sent}
													fullWidth
													label='Задачи'
													margin='normal'
													name='tasks'
													sx={{ 
														mb: 3
													}}
													required
												/>
											</Box>
											<Box
												
												sx={{ 
													width: '55%',
													ml: 6,
													mt: 4,
													['@media(max-width: 800px)'] : {
														width: '100%',
														ml: 0,
														mt: 0,
													}
												}}
											>
												<StyledAutocomplete 
													inputValue={assembly}
													onInputChange={(event, newInputValue) => {
														setAssembly(newInputValue);
													}}
													id="options-1"
													options={options1}
													sx={{ 
														mb: 3,
													}}
													renderInput={(params) => 
														<TextField 
															{...params} 
															label="Выбранная сборка"
															required
														/>
													}

												/>
												<StyledAutocomplete
													inputValue={
														assembly === 'Комплектация на выбор Happy PC'
														? ''
														: cpu
													}
													onInputChange={(event, newInputValue) => {
														setCpu(newInputValue);
													}}
													id="options-2"
													disabled={
														assembly === 'Комплектация на выбор Happy PC'
														? true 
														: false
													}
													options={options2}
													sx={{ 
														mb: 3,
													}}
													renderInput={(params) => 
														<TextField 
															{...params} 
															label="Процессор"
															required
														/>
													}
												/>
												<StyledAutocomplete
													inputValue={
														assembly === 'Комплектация на выбор Happy PC'
														? ''
														: videoCard
													}
													onInputChange={(event, newInputValue) => {
														setVideoCard(newInputValue);
													}}
													id="options-3"
													disabled={
														assembly === 'Комплектация на выбор Happy PC'
														? true 
														: false
													}
													options={options3}
													sx={{ 
														mb: 3,
													}}
													renderInput={(params) => 
														<TextField 
															{...params} 
															label="Видеокарта"
															required
														/>
													}
												/>
												<StyledAutocomplete
													inputValue={
														assembly === 'Комплектация на выбор Happy PC'
														? ''
														: ssdCapacity
													}
													onInputChange={(event, newInputValue) => {
														setSsdCapacity(newInputValue);
													}}
													id="options-4"
													disabled={
														assembly === 'Комплектация на выбор Happy PC'
														? true 
														: false
													}
													options={options4}
													sx={{ 
														mb: 3,
													}}
													renderInput={(params) => 
														<TextField 
															{...params} 
															label="Объём SSD-накопителя"
															required
														/>
													}
												/>
												<StyledAutocomplete
													inputValue={
														assembly === 'Комплектация на выбор Happy PC'
														? ''
														: hhdCapacity
													}
													onInputChange={(event, newInputValue) => {
														setHhdCapacity(newInputValue);
													}}
													id="options-5"
													disabled={
														assembly === 'Комплектация на выбор Happy PC'
														? true 
														: false
													}
													options={options5}
													sx={{ 
														mb: 3,
													}}
													renderInput={(params) => 
														<TextField 
															{...params} 
															label="Объём HDD-накопителя"
															required
														/>
													}
												/>
												<StyledAutocomplete
													inputValue={budget}
													onInputChange={(event, newInputValue) => {
														setBudget(newInputValue);
													}}
													id="options-6"
													disabled={submitting || sent}
													options={options6}
													renderInput={(params) => 
														<TextField 
															{...params} 
															label="Бюджет"
															required
														/>
													}
												/>
												<FormSpy subscription={{ submitError: true }}>
													{({ submitError }) =>
														submitError ? (
															<FormFeedback error sx={{ mt: 2 }}>
																{submitError}
															</FormFeedback>
														) : null
													}
												</FormSpy>
												<FormButton
													sx={{ mt: 4, mb: 2 }}
													disabled={submitting || sent}
													fullWidth
												>
													{submitting || sent ? "Отправлено" : "Отправить"}
												</FormButton>
											</Box>
										</Box>	
									)}
								</Form>
							</AppForm>
						</div>
					</section>
			</Layout>
			<Snackbar
				open={openSnackBar}
				closeFunc={handleCloseSnackBar}
				message='В ближайшее время с Вами свяжется наш специалист!'
			/>
		</>
	)
}

export default withRoot(OrderAssembly)