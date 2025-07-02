import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function MovieBooking() {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  //const [ticketInfo, setTicketInfo] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovies() {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=733d08f3b55d5c3b516692a4f30a1ff7"
      );
      setMovies(res.data.results);
    }
    fetchMovies();
  }, []);
  useEffect(() => {
    if (!selectedMovieId) return;
    const today = new Date();
    const dates = Array.from({ length: 5 }, (_, i) => {
      const d = new Date(today); //create day coppy
      d.setDate(d.getDate() + i); //update day
      return d.toISOString().split("T")[0]; // yyyy-mm-dd
    });
    setAvailableDates(dates);
    setSelectedDate("");
    setSelectedTime("");
  }, [selectedMovieId]);

  useEffect(() => {
    if (!selectedDate) {
      setAvailableTimes([]);
      return;
    }
    setAvailableTimes(["10:00", "14:00", "18:00", "21:00"]);
  }, [selectedDate]);

  const handleBooking = () => {
    if (!selectedMovieId) return alert("Vui lòng chọn phim");
    if (!selectedDate) return alert("Vui lòng chọn ngày chiếu");
    if (!selectedTime) return alert("Vui lòng chọn giờ chiếu");
    if (!name.trim()) return alert("Vui lòng nhập tên của bạn");

    const bookingInfo = {
      movieId: selectedMovieId,
      movieTitle: movies.find((m) => m.id == selectedMovieId).title,
      date: selectedDate,
      time: selectedTime,
      name: name.trim(),
    };

    console.log(bookingInfo);
     alert(`Đặt vé thành công! Bạn đã chọn phim "${bookingInfo.movieTitle}" vào ngày ${bookingInfo.date} lúc ${bookingInfo.time}.`);
    // const movie = movies.find((m) => m.id == selectedMovieId);
    // setTicketInfo({
    //   movieTitle: movie.title,
    //   date: selectedDate,
    //   time: selectedTime,
    //   name: name.trim(),
    // });
  };

  return (
    <div className="max-w-xl h-auto m-auto p-10 bg-blue-520 shadow-sm rounded-lg" defaultValue="off">
      <h2 className="text-3xl font-bold mb-4 text-center">Đặt vé xem phim</h2>

      <div className="mb-4 ">
        <label className="block mb-1">Chọn phim:</label>
        <select
          className="border rounded p-2 w-full"
          value={selectedMovieId}
          onChange={(e) => setSelectedMovieId(e.target.value)}
        >
          {movies.map((movie) => (
            <option key={movie.id} value={movie.id} className=" bg-slate-800">
              {movie.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4 ">
        <label className="block mb-1 ">Ngày chiếu:</label>
        <select
          className="border rounded p-2 w-full"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          disabled={!selectedMovieId}
        >
          {availableDates.map((date) => (
            <option key={date} value={date} className="bg-slate-800">
              {date}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Giờ chiếu:</label>
        <select
          className="border rounded p-2 w-full"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          disabled={!selectedDate}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time} className="bg-slate-800 ">
              {time}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Tên của bạn:</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="text-white rounded flex gap-4">
        <button
          onClick={handleBooking}
          className="bg-red-400 m-auto font-semibold justify-center  w-40 rounded-xl h-10 hover:bg-green-600"
        >
          Chọn phim
        </button>

        <div
          onClick={() => navigate(`/movies`)}
          className="bg-blue-600 m-auto font-semibold justify-center align-middle w-40 rounded-xl h-10 hover:bg-gray-700 cursor-pointer"
        >
          <span className="flex justify-center items-center text-md p-2">
            Về trang chủ
          </span>
        </div>
      </div>
      {/* {ticketInfo && (
  <div className="mt-10 flex justify-center">
    <div className="w-[350px] bg-gradient-to-br from-gray-100 to-gray-300 rounded-2xl shadow-2xl border border-gray-400 relative overflow-hidden">

     
      <div className="bg-red-500 text-white px-6 py-4 text-center rounded-t-2xl">
        <h3 className="text-xl font-bold uppercase tracking-widest"> Vé Xem Phim</h3>
      </div>

    
      <div className="p-6 space-y-4">
        <div className="text-sm text-gray-700">
          <span className="font-semibold text-gray-900"> Tên khách:</span> {ticketInfo.name}
        </div>
        <div className="text-sm text-gray-700">
          <span className="font-semibold text-gray-900"> Tên phim:</span> {ticketInfo.movieTitle}
        </div>
        <div className="flex justify-between text-sm text-gray-700">
          <div>
            <span className="font-semibold text-gray-900"> Ngày:</span><br />{ticketInfo.date}
          </div>
          <div>
            <span className="font-semibold text-gray-900"> Giờ:</span><br />{ticketInfo.time}
          </div>
        </div>
      </div>

     
      <div className="border-t border-dashed border-gray-400 mx-6 mt-2"></div>
      <div className="px-6 py-3 text-center text-xs text-gray-500">
        Cảm ơn bạn đã đặt vé. Chúc bạn xem phim vui vẻ! 
      </div>

     
      <div className="absolute top-16 -left-4 w-8 h-8 bg-gray-300 rounded-full border border-gray-400"></div>
      <div className="absolute top-16 -right-4 w-8 h-8 bg-gray-300 rounded-full border border-gray-400"></div>
    </div>
  </div>
)} */}
    </div>
  );
}
