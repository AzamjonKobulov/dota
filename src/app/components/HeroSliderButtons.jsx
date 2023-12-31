const HeroSliderButtons = () => {
  return (
    <div className="flex items-center justify-center gap-4 relative z-10 mt-8 xl:mt-0 pb-8 md:pb-6">
      <button className="btn-prev w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 grid place-content-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.475 17.125L8.97501 12.625C8.89167 12.5417 8.82901 12.4457 8.78701 12.337C8.74567 12.229 8.72501 12.1167 8.72501 12C8.72501 11.8833 8.74567 11.7707 8.78701 11.662C8.82901 11.554 8.89167 11.4583 8.97501 11.375L13.475 6.87499C13.625 6.72499 13.8 6.64999 14 6.64999C14.2 6.64999 14.375 6.72499 14.525 6.87499C14.675 7.02499 14.75 7.19999 14.75 7.39999C14.75 7.59999 14.675 7.77499 14.525 7.92499L10.45 12L14.525 16.075C14.675 16.225 14.75 16.4 14.75 16.6C14.75 16.8 14.675 16.975 14.525 17.125C14.375 17.275 14.2 17.35 14 17.35C13.8 17.35 13.625 17.275 13.475 17.125Z"
            fill="white"
          />
        </svg>
      </button>
      <button className="btn-next w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 grid place-content-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.87499 17.125C8.72499 16.975 8.64999 16.8 8.64999 16.6C8.64999 16.4 8.72499 16.225 8.87499 16.075L12.95 12L8.87499 7.92499C8.72499 7.77499 8.64999 7.59999 8.64999 7.39999C8.64999 7.19999 8.72499 7.02499 8.87499 6.87499C9.02499 6.72499 9.19999 6.64999 9.39999 6.64999C9.59999 6.64999 9.77499 6.72499 9.92499 6.87499L14.425 11.375C14.5083 11.4583 14.571 11.554 14.613 11.662C14.6543 11.7707 14.675 11.8833 14.675 12C14.675 12.1167 14.6543 12.229 14.613 12.337C14.571 12.4457 14.5083 12.5417 14.425 12.625L9.92499 17.125C9.77499 17.275 9.59999 17.35 9.39999 17.35C9.19999 17.35 9.02499 17.275 8.87499 17.125Z"
            fill="#D2D3D6"
          />
        </svg>
      </button>
    </div>
  );
};

export default HeroSliderButtons;
