import { React, useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function SearchHeader() {
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  // useParams로 불러온 keyword가 변할 때마다 input과 텍스트에 표시되도록 저장
  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <div>
        <Link to="/videos" className="flex items-center">
          <BsYoutube className="text-4xl text-brand" />
          <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
        </Link>
      </div>

      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-5/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleChange}
        ></input>
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
