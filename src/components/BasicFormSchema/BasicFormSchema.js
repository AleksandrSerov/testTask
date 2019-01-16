import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
	name: Yup.string()
	.min(2,"Имя должно быть длинее 2 символов!")
	.max(30, "Имя не может быть длиннее 30 символов!")
	.required('Поле должно быть заполнено!'),
	birthday: Yup.string()
	.matches(/\d{2}\.\d{2}\.\d{4}/, "Заполните дату полностью!" )
	.required('Поле должно быть заполнено!'),
	phone: Yup.string()
	.matches(/\+7 \(\d{3}\) \d{3}-\d{4}/, "Заполните номер телефона полностью!" )
	.required('Поле должно быть заполнено!'),
});
export default BasicFormSchema;