const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = []

function addItem(e) {
	e.preventDefault()
	const text = this.querySelector('[name=item]').value
	const item = {
		// text: text, - Przypisujemy powyższą zmienną text do klucza text. Nazwa klucza = nazwa wartości, czyli możemy zapisać to skrótowo ↓
		text,
		done: false,
	}
	// Pobierając treść inputa, będziemy tworzyć z niego obiekt. ↑ Weź tekst z tego pola i umieść go w obiekcie. Przede wszystkim utworzymy obiekt, który będzie miał dwa elementy. Będzie miał tekst nazwy elementu, który za chwilę zastąpimy. Będzie miał stan "done" równy "false". Więc domyślnie nie będzie zaznaczony. Teraz, jak możemy uzyskać ten tekst tutaj? Cóż, możemy to zrobić, "const text =" i najpierw złapiemy to pole wejściowe, które ma nazwę item. Możemy zrobić "this.querySelector"( "[name=item]"). Dlaczego tak?, To dlatego, że będzie to rzeczywisty formularz. To jest cały znacznik formularza, a następnie będziemy szukać wewnątrz tego znacznika formularza czegoś, co ma atrybut name "item". Jest to bardzo pomocne, jeśli masz wiele formularzy na stronie. Nie chcesz po prostu wybierać go globalnie, chcesz zawęzić wyszukiwanie wewnątrz jednego formularza, z którym pracujemy.

	items.push(item)
	// console.table(items)
	populateList(items, itemsList)
	this.reset()
	// ↑ Jedną rzeczą, którą chcemy zrobić, jest wyczyszczenie tego wejścia.To, co możemy zrobić, to powiedzieć "this.reset".Ponieważ "this" jest elementem formularza, a elementy formularza mają metodę o nazwie "reset".Prawdopodobnie spotkałeś się z sytuacją, w której spędziłeś godzinę wypełniając gdzieś formularz online i przypadkowo kliknąłeś przycisk resetowania zamiast przycisku przesyłania.Właśnie do tego jest podłączony "reset".
}

function populateList(plates = [], platesList) {
	// w parametrach przekazujemy tablicę items oraz listę dań, którą chcemy uzupełniać o wprowadzone dane.
	// ustawimy to tak, aby domyślnie była to pusta tablica. Powodem, dla którego to robię, jest to, że jeśli z jakiegoś powodu zapomnisz czegoś przekazać, nie zepsuje to twojego js.
	platesList.innerHTML = plates
		.map((plate, index) => {
			return `<li>${plate.text}</li>`
		})
		.join('')
	// ↑ musi być return, bo inaczej map nic nie zwróci
	platesList.innerHTML = plates.map((plate, index) => `<li>${plate.text}</li>`).join('')
	// ↑ ten sam zapis bez return - jest ono tutaj domyśle
}

addItems.addEventListener('submit', addItem)
// W tym kontekście, addItem jest funkcją obsługi zdarzeń, która zostanie wywołana, gdy formularz zostanie przesłany (czyli po kliknięciu przycisku "submit" lub naciśnięciu klawisza Enter, gdy pole formularza jest aktywne). Ta funkcja obsługi zdarzeń może zawierać logikę dodawania nowych elementów do listy lub inne operacje, które mają być wykonane po przesłaniu formularza.

// 8:30


