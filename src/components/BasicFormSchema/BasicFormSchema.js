import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
	name: Yup.string()
	.min(2,"Имя должно быть длинее 2 символов!")
	.max(30, "Имя не может быть длиннее 30 символов!")
	.matches(/[А-Яа-я]+/g, 'Имя должно быть на русском языке!'),
	birthday: Yup.string().matches(/\d{2}\.\d{2}\.\d{4}/, "Заполните дату полностью!" ),
	phone: Yup.string().matches(/\+7 \(\d{3}\) \d{3}-\d{4}/, "Заполните номер телефона полностью!" ),
});
export default BasicFormSchema;