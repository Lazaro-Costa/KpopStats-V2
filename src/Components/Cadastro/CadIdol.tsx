import React from 'react';
import FormContainer from '../Form/FormContainer/FormContainer';
import FormGroup from '../Form/FormGroup/FormGroup';
import Input from '../Form/Input/InputPlaceholder/Input';
import InputDate from '../Form/Input/InputDate/InputDate';
import {
  ICreateIdol,
  ICreatePic,
  IGetCompanys,
  IGetGroups,
} from '../../Interfaces/Interfaces.api';
import InputComponent from '../Form/Input/InputComponent/InputComponent';
import { CreateEntity } from '../../utils/CreateEntity';
import DropdownSelect from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import { apiBase } from '../Helper/Variables';
import Loading from '../Loading/Loading';
import FetchWithPage from '../../utils/FetchWithPage';

const CadIdol = () => {
  const [idol, setIdol] = React.useState<ICreateIdol>({
    name: '',
    companyId: '',
    solist: '',
    korean_name: '',
    foreign_name: '',
    nationality: '',
    date_birth: '',
    more_info: '',
    groupId: '',
    picsId: '',
  });
  const [pics, setPics] = React.useState<ICreatePic>({
    name: '',
    urls_banner: [''],
    urls_profile: [''],
  });

  const [page, setPage] = React.useState(1);
  const [pageCo, setPageCo] = React.useState(1);
  const [groups, setGroups] = React.useState<IGetGroups[]>([]);
  const [companys, setCompanys] = React.useState<IGetCompanys[]>([]);
  const [load, setLoad] = React.useState(false);
  const [erro, setErro] = React.useState<Error | Boolean>(false);
  const [result, setResult] = React.useState<string>('');
  const [showOriginalButton, setShowOriginalButton] = React.useState(true);
  FetchWithPage(
    'groups',
    groups,
    setGroups,
    page,
  );
  FetchWithPage(
    'companys',
    companys,
    setCompanys,
    pageCo,
  );

  const handleClick = async e => {
    e.preventDefault();
    try {
      setLoad(true);
      setErro(false);
      const data: ICreateIdol = {
        ...idol,
        date_birth: new Date(idol.date_birth).toISOString(),
      };
      const CreateGroup = new CreateEntity(data, pics);
      const response = await CreateGroup.createEntity(`${apiBase}/idols`);
      if (response) {
        // setLoad(false);
        setResult('Deu certo!');
        setIdol({
          name: '',
          companyId: '',
          solist: '',
          korean_name: '',
          foreign_name: '',
          nationality: '',
          date_birth: '',
          more_info: '',
          groupId: '',
          picsId: '',
        });
        setPics({
          name: '',
          urls_banner: [''],
          urls_profile: [''],
        });
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) setErro(error);
    }finally {
      setLoad(false);
    }
  };
  const handleLoad = () => {
    if (load) {
      return <Loading />;
    } else if (erro !== false) {
      return <pre>{JSON.stringify(erro)}</pre>;
    } else if (result !== '' && showOriginalButton) {
      // Mostra o botão desabilitado temporariamente por 2000ms
      setTimeout(() => {
        setShowOriginalButton(false);
      }, 2000);

      return <Button label={result} disabled />;
    } else {
      // Se showOriginalButton for false, retorna o botão original
      return (
        <Button
          label={'Cadastrar'}
          onClick={(e) => {
            handleClick(e);
            setShowOriginalButton(true); // Restaura o estado do botão original
          }}
        />
      );
    }
  };
  return (
    <FormContainer>
      <FormGroup>
        <h1 className="text-3xl text-slate-200">Idol</h1>

        <div className="w-full bg-zinc-800 p-4 gap-2 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-slate-200 text-3xl">Solist?</h1>
          <DropdownSelect
            options={[
              { id: 0, name: 'false' },
              { id: 1, name: 'true' },
            ]}
            onSelect={op =>
              setIdol(prevIdol => ({ ...prevIdol, solist: Boolean(op.id) }))
            }
            handleLoad={() => null}
          />
        </div>
        {idol.solist === false && (
          <div className="w-full bg-zinc-800 p-4 gap-2 rounded-lg flex flex-col justify-center items-center">
            <h1 className="text-slate-200 text-3xl">Groups</h1>
            <DropdownSelect<IGetGroups>
              options={groups}
              onSelect={group =>
                setIdol(prevIdol => ({
                  ...prevIdol,
                  groupId: group.id,
                  companyId: group.companyId,
                }))
              }
              handleLoad={() => setPage(page + 1)}
            />
          </div>
        )}

        {idol.solist === true && (
          <div className="w-full bg-zinc-800 p-4 gap-2 rounded-lg flex flex-col justify-center items-center">
            <h1 className="text-slate-200 text-3xl">Companys</h1>
            <DropdownSelect<IGetCompanys>
              options={companys}
              onSelect={company =>
                setIdol(prevIdol => ({ ...prevIdol, companyId: company.id }))
              }
              handleLoad={() => setPageCo(pageCo + 1)}
            />
          </div>
        )}

        <Input
          req
          content={'Nome'}
          value={idol.name}
          onChange={({ target }) => setIdol({ ...idol, name: target.value })}
        />

        <Input
          req
          content={'Korean Name'}
          value={idol.korean_name}
          onChange={({ target }) =>
            setIdol({ ...idol, korean_name: target.value })
          }
        />

        <InputDate
          label={'Date Birth'}
          value={idol.date_birth}
          onChange={({ target }) =>
            setIdol({ ...idol, date_birth: target.value })
          }
        />

        <Input
          req
          content={'Foreign Name'}
          value={idol.foreign_name}
          onChange={({ target }) =>
            setIdol({ ...idol, foreign_name: target.value })
          }
        />

        <Input
          req
          content={'Nationality'}
          value={idol.nationality}
          onChange={({ target }) =>
            setIdol({ ...idol, nationality: target.value })
          }
        />

        <Input
          req
          content={'More Info'}
          value={idol.more_info}
          onChange={({ target }) =>
            setIdol({ ...idol, more_info: target.value })
          }
        />

        <InputComponent entity={pics} setEntity={setPics} />

        <div className="flex w-full justify-center items-center">
          {handleLoad()}
        </div>
      </FormGroup>
      <pre>{JSON.stringify({ idol, pics }, null, 2)}</pre>
    </FormContainer>
  );
};

export default CadIdol;
