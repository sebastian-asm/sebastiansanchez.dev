export default function loading(active) {
  const loading = document.querySelector('#loading')
  loading.classList.add('fade-in')

  if (active) {
    loading.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="loading"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 6l0 -3" />
        <path d="M16.25 7.75l2.15 -2.15" />
        <path d="M18 12l3 0" />
        <path d="M16.25 16.25l2.15 2.15" />
        <path d="M12 18l0 3" />
        <path d="M7.75 16.25l-2.15 2.15" />
        <path d="M6 12l-3 0" />
        <path d="M7.75 7.75l-2.15 -2.15" />
      </svg>
    `
  } else {
    loading.remove()
  }
}
