const CardUpdateModal = ({ closeModal }) => {
  return (
    <>
      <div className="modal-header">
        <button className="close" title="닫기" onClick={closeModal}>
          X
        </button>
      </div>
      {/* form 태그 작성 X */}
      <form name="" id="" action="" method="">
        <label for="title" className="label">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="제목을 입력해주세요"
            value="Lorem, ipsum dolor."
          />
        </label>
        <label for="startAt" className="label">
          <span className="label-text">시작일</span>
          <input type="date" name="startAt" id="startAt" />
        </label>
        <label for="endAt" className="label">
          <span className="label-text">종료일</span>
          <input type="date" name="endAt" id="endAt" />
        </label>
        <label for="status" className="label">
          <span className="label-text">상태</span>
          <select name="status" id="status">
            <option value="TODO">To Do</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="DONE">Done</option>
          </select>
        </label>
        <label for="" className="label">
          <textarea
            name="content"
            id="content"
            placeholder="내용을 입력해주세요"
          ></textarea>
        </label>
      </form>
    </>
  );
};

export default CardUpdateModal;
