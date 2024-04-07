const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = []

function addItem(e) {
	e.preventDefault()
	const text = this.querySelector('[name=item]').value
	const item = {
		// text: text, - Przypisujemy powyższą zmienną text do klucza text. Nazwa klucza = nazwa wartości, czyli możemy zapisać to skrótowo ↓
		text,
		done: false
	}
	// Pobierając treść inputa, będziemy tworzyć z niego obiekt. ↑ Weź tekst z tego pola i umieść go w obiekcie. Przede wszystkim utworzymy obiekt, który będzie miał dwa elementy. Będzie miał tekst nazwy elementu, który za chwilę zastąpimy. Będzie miał stan "done" równy "false". Więc domyślnie nie będzie zaznaczony. Teraz, jak możemy uzyskać ten tekst tutaj? Cóż, możemy to zrobić, "const text =" i najpierw złapiemy to pole wejściowe, które ma nazwę item. Możemy zrobić "this.querySelector"( "[name=item]"). Dlaczego tak?, To dlatego, że będzie to rzeczywisty formularz. To jest cały znacznik formularza, a następnie będziemy szukać wewnątrz tego znacznika formularza czegoś, co ma atrybut name "item". Jest to bardzo pomocne, jeśli masz wiele formularzy na stronie. Nie chcesz po prostu wybierać go globalnie, chcesz zawęzić wyszukiwanie wewnątrz jednego formularza, z którym pracujemy.
    this.reset()
    // ↑ Jedną rzeczą, którą chcemy zrobić, jest wyczyszczenie tego wejścia.To, co możemy zrobić, to powiedzieć "this.reset".Ponieważ "this" jest elementem formularza, a elementy formularza mają metodę o nazwie "reset".Prawdopodobnie spotkałeś się z sytuacją, w której spędziłeś godzinę wypełniając gdzieś formularz online i przypadkowo kliknąłeś przycisk resetowania zamiast przycisku przesyłania.Właśnie do tego jest podłączony "reset".
    items.push(item)
    console.table(items);
}

function populateList(plates = [], platesList){
    // w parametrach przekazujemy tablicę items, ale zabezpieczamy się, że domyślnie ma być pusta. oraz listę dań, którą chcemy uzupełniać o wprowadzone dane.
}

addItems.addEventListener('submit', addItem)

// 8:30