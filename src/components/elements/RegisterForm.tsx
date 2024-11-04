import { ChangeEventHandler, useCallback, useId } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import Input from './Input.tsx';
import { type IRegistrationData, type TBoolChangeInput, type TStringChangeInput } from '../../utils/interface/userInterface';
import { BUTTON_CLASS } from '../../utils/constans/buttonConstans';
import { userSignUp } from '../../service/actions/userActions';
import { registrationDataChange } from '../../service/slice/userSlice';
import { useAppDispatch, useAppSelector } from '../../service/hooks/hooks';

function RegisterForm() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(
    state => state.user.user,
  );

  const id: string = useId();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegistrationData>({ mode: 'onBlur' });

  const onUserChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const userChangeInput: Partial<IRegistrationData> = {};
      if (e.target.id === 'mailing' || e.target.id === 'agreement') {
        userChangeInput[e.target.id as TBoolChangeInput] = e.target.checked;
      } else {
        userChangeInput[e.target.id as TStringChangeInput] = e.target.value;
      }
      dispatch(registrationDataChange(userChangeInput)); 
    },
    [dispatch],
  );

  const onSubmit: SubmitHandler<IRegistrationData> = useCallback(
    (data) => dispatch(userSignUp(data)),
    [dispatch],
  );

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        class="register"
        id="firstName"
        placeholder="" 
        type="text" 
        title="Имя"
        defaultValue={user.firstName}
        register={
          register('firstName', {
            onChange: onUserChange,
            required: 'Это поле обязательно для заполнения!',
            pattern: /^[A-Za-z а-яё]+$/i,
          })
        }
        error={errors.firstName}
      />
      <Input
        class="register"
        id="lastName"
        placeholder=""
        type="text"
        title="Фамилия"
        register={
          register('lastName', {
            onChange: onUserChange,
            required: 'Это поле обязательно для заполнения!',
            pattern: /^[A-Za-zА-Яа-яЁё\s]/i,
          })
        }
        error={errors.lastName}
      />
      <Input
        class="register"
        id="phone"
        placeholder=""
        type="tel"
        title="Номер телефона"
        register={
          register('phone', {
            onChange: onUserChange,
            pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
          })
        }
        error={errors.phone}
      />
      <Input
        class="register"
        id="email"
        placeholder=""
        type="email"
        title="E-mail"
        register={
          register('email', {
            onChange: onUserChange,
            required: 'Это поле обязательно для заполнения!',
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          })
        }
        error={errors.email}
      />
      <Input
        class="register"
        id="password"
        placeholder=""
        type="password"
        title="Пароль"
        register={
          register('password', {
            required: 'Это поле обязательно для заполнения!',
            minLength: {
              value: 8,
              message: 'Пароль не должен быть менее 8 символов!',
            },
            pattern: /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{8,}$/,
          })
        }
        error={errors.password}
      />
      <Input
        class="register"
        id="doublePassword"
        placeholder=""
        type="password"
        title="Повтори пароль"
        register={
          register('doublePassword', {
            required: 'Это поле обязательно для заполнения!',
            validate: (value?: string) => {
              if (watch('password') != value) {
                return 'Пароли не совпадают!';
              }
            },
          })
        }
        error={errors.doublePassword}
      />
      <div /* className={styles.checkbox_block} */>
        <label /* className={styles.label_checkbox} */>
          {' '}
          <input id='mailing' {...register('mailing', { onChange: onUserChange })} type='checkbox' />
          <p>
            Я хотел бы подписаться на уведомления о новых событиях
            (необязательно)
          </p>
        </label>
        <label /* className={styles.label_checkbox} */>
          <input
            id='agreement'
            {...register('agreement', {
              required: 'Это поле обязательно для заполнения!',
              onChange: onUserChange,
            })}
            type='checkbox'
          />

          <p>
            Регистрируясь, я соглашаюсь на
            <a> обработку моих персональных данных</a>
          </p>
        </label>
        {errors.agreement && (
          <p
            id={`${id}-firstName-error-message`}
            aria-live='assertive'
            /* className={styles.errors} */
          >
            {errors?.agreement?.message || 'Error!'}
          </p>
        )}
      </div>
      <button className={BUTTON_CLASS.button_size_small} type='submit'>
        Зарегистрироваться
      </button>
    </form>
  );
}

export default RegisterForm;
