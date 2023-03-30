// CACHED ELEMENTS
var scholarshipUL = document.getElementById('scholarship');
var leadershipUL = document.getElementById('leadership');

var data = {
	honors: [
		{
			type: "honor",
			text: "Fellow: American Association for the Advancement of Science (AAAS) Washington, D. C."
		},
		{
			type: "honor",
			text: "Fellow: Cushman Foundation for Foraminiferal Research (Washington, D. C.)."
		},
		{
			type: "award",
			text: "Bermuda Biological Station Award for Marine Science Research (Marine Biomineralizing Protista) - 1979.",
		},
		{
			type: "honor",
			text: "Diatom Species: Cocconeis andersonii (Reimer and Lee) named in honor of the research contributions by O. R. Anderson to Protistology and symbiosis."
		},
		{
			type: "honor",
			text: "Flagellate Haptophyte Species: Chrysochromulina andersonii (Yuasa, Kawachi, Horiguchi, and Takahashi) named in honor of previous research contributions on radiolarian symbioses by O. R. Anderson."
		},
		{
			type: "award",
			text: "Medal of the Paleontological Society of Japan, Sendai Japan - 1999"
		},
    {
			type: "honor",
			text: "Cutting Edge Science (AAAS) Special Invited Lecturer on Radiolaria in a Changing Global Climate. AAAS Headquarters, Washington, D. C. May 1st, 2014."
		},
    {
			type: "honor",
			text: "Special Editor: STEM Education Issue, Journal of Computers in Education. 2015."
		},
    {
			type: "award",
			text: "Lifetime Member Achievement Award (International Society of Protistologists). 2021"
		},
    {
			type: "honor",
			text: "ResearchGate publication score (44): higher than 97.5% of all ResearchGate members’ scores."
		}
	],
	leadership: [
		{
			type: "timeline",
			time: "1963 – 1964",
			text: "Washington University, St. Louis"
		},{
			type: "timeline",
			time: "1964 – 1967",
			text: "Assiant Professor of Natural Sciences, Columbia University, Teachers College"
		},{
			type: "timeline",
			time: "1968 – 1970",
			text: "Associate Professor of Natural Sciences, Columbia University, Teachers College"
		},{
			type: "timeline",
			time: "1971 – Present",
			text: "Professor of Natural Sciences, Columbia University, Teachers College"
		},{
			type: "timeline",
			time: "1992 – 1993",
			text: "College Research Coordinator, Teachers College"
		},{
			type: "timeline",
			time: "1993 – 1996",
			text: "Associate Director, Division of Instruction, T. C."
		}
	],
  degree: [
		{
			type: "timeline",
			time: "1959",
			text: "Bachelor of Arts (Botany), Washington University, St. Louis"
		},{
      type: "timeline",
			time: "1961",
			text: "Master of Arts (Biological Education), Washington University"
    },{
      type: "timeline",
			time: "1964",
			text: "Doctorate (Biology and Education), Washington University"
    }
],
	/*service: [
		{
			type: "timeline",
			time: "1948 - 1957",
			text: "U.S. Army - Seven years - Active and Reserve Service (Military/Scientific Intelligence)"
		},
		{
			type: "timeline",
			time: "1998 - 2000",
			text: "Peace Corps/Nepal"
		},
		{
			type: "article",
			title: "Checking In, Fifty Years Later",
			url: "https://www.tc.columbia.edu/articles/2016/june/checking-in-fifty-years-later"
		},
		{
			type: "article",
			title: "For a Scholarship Student from Shanghai, Math Education is Elementary",
			url: "https://www.tc.columbia.edu/campaign/ways-to-engage/read-our-future-first-stories/for-edith-shih-scholar-math-education-is-elementary/"
		},
		{
			type: "article",
			title: "TC Students Study in Chile and Argentina",
			url: "https://www.tc.columbia.edu/articles/2002/march/tc-students-study-in-chile-and-argentina/"
		},
		{
			type: "article",
			title: "Introducing TC Muses",
			url: "https://www.tc.columbia.edu/articles/2001/june/introducing-tc-muses/"
		},
		{
			type: "article",
			title: "An Icelandic Connection: Teachers College and Reykjavik University",
			url: "https://www.tc.columbia.edu/articles/2008/august/an-icelandic-connection-teachers-college-and-reykjavik-univ/"
		},
		{
			type: "article",
			title: "Taking TC on the Road",
			url: "https://www.tc.columbia.edu/articles/2008/september/taking-tc-on-the-road/"
		}
	],*/
	publications: [
		{
			type: "publication",
			text: "SM Adl, AGB Simpson, MA Farmer, RA Andersen, OR Anderson, JR Barta, ... Journal of Eukaryotic Microbiology 52 (5), 399-451",
       title: "The new higher level classification of eukaryotes with emphasis on the taxonomy of protists",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=H5X5dosAAAAJ&citation_for_view=H5X5dosAAAAJ:u5HHmVD_uO8C",
		},
		{
			type: "publication",
			text: "C Hemleben, M Spindler, OR Anderson Springer, Berlin",
      title: "Modern planktonic foraminifera",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=H5X5dosAAAAJ&citation_for_view=H5X5dosAAAAJ:u-x6o8ySG0sC",
		},
		{
			type: "publication",
			text: "OR Anderson",
      title: "Radiolaria",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=H5X5dosAAAAJ&citation_for_view=H5X5dosAAAAJ:mNrWkgRL2YcC",
		},
		{
			type: "publication",
			text: "Z Zacharia, OR Anderson American Journal of Physics 71 (6), 618-629",
      title: "The effects of an interactive computer-based simulation prior to performing a laboratory inquiry-based experiment on students’ conceptual understanding of physics",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=H5X5dosAAAAJ&citation_for_view=H5X5dosAAAAJ:PyEswDtIyv0C",
		},
		{
			type: "publication",
			text: "J Chen, KS de Felipe, M Clarke, H Lu, OR Anderson, G Segal, ... Science 303 (5662), 1358-1361",
      title: "Legionella effectors that promote nonlytic release from protozoa",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=H5X5dosAAAAJ&citation_for_view=H5X5dosAAAAJ:9yKSN-GCB0IC",
		},
		{
			type: "publication",
			text: "SM Adl, BS Leander, AGB Simpson, JM Archibald, OR Anderson, D Bass, ... Systematic biology 56 (4), 684-689",
      title: "Diversity, nomenclature, and taxonomy of protists",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=H5X5dosAAAAJ&citation_for_view=H5X5dosAAAAJ:ufrVoPGSRksC",
		},
		{
			type: "publication",
			text: "KS De Felipe, RT Glover, X Charpentier, OR Anderson, M Reyes, ... PLoS pathogens 4 (8), e1000117",
      title: "Legionella Eukaryotic-Like Type IV Substrates Interfere with Organelle Trafficking",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=H5X5dosAAAAJ&citation_for_view=H5X5dosAAAAJ:Tyk-4Ss8FVUC",
		},
		{
			type: "publication",
			text: "AL Mancinelli, CPH Yang, P Lindquist, OR Anderson, I Rabino Plant physiology 55 (2), 251-257",
      title: "Photocontrol of anthocyanin synthesis: III. The action of streptomycin on the synthesis of chlorophyll and anthocyanin",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=H5X5dosAAAAJ&citation_for_view=H5X5dosAAAAJ:65Yg0jNCQDAC",
		},
		{
			type: "publication",
			text: "GP Otto, MY Wu, N Kazgan, OR Anderson, RH Kessin Journal of Biological Chemistry 278 (20), 17636-17645",
      title: "Macroautophagy is required for multicellular development of the social amoeba Dictyostelium discoideum",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=H5X5dosAAAAJ&citation_for_view=H5X5dosAAAAJ:qjMakFHDy7sC",
		},
		{
			type: "publication",
			text: "JJ Lee, ME McEnery, LJ Goff Algal symbiosis: a continuum of interaction strategies, 37-68",
      title: "Symbiosis in foraminifera",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=H5X5dosAAAAJ&citation_for_view=H5X5dosAAAAJ:2osOgNQ5qMEC"
		}
	]
};

function activateLink(event) {
	var ul = event.currentTarget;
	var el = event.target;
	if (el.tagName === "A") {
		ul.querySelector('li.active').classList.remove('active');
		el.parentElement.classList.add('active');
	}
}

function createLI(data) {

	for (var key in data) {
		var html = "";

		if (key === "publications") {
			var totalPubs = data[key].length;
			var oneThirdIndex = Math.floor(totalPubs / 3);

			html = "";
			for (let i=0; i < oneThirdIndex; i++) {
				let el = `<li><a href="${data[key][i].url}">${data[key][i].title}<br></a>${data[key][i].text}</li>`;
				html += el;
			}

			document.getElementById(key + "-main").innerHTML = html;

      /* Need to figure out why i < totalPubs - 1? */
			html = "";
			for (let i=oneThirdIndex; i < totalPubs; i++) {
				let el = `<li><a href="${data[key][i].url}">${data[key][i].title}<br></a>${data[key][i].text}</li>`;
				html += el;
			}
			document.getElementById(key + "-extra").innerHTML = html;
			document.getElementById(key + "-extra").setAttribute('start', oneThirdIndex + 1);

		} else {
			for (var item of data[key]) {
				var li = "";

				if (item.type === "timeline") {
					li = `<li class="row"><div class="time col-3">${item.time}</div><div class="text col-8 offset-1">${item.text}</div></li>`;
				} else if (item.type === "honor") {
					li = `<li class="row"><div class="time col-3">Honor</div><div class="text col-8 offset-1">${item.text}</div></li>`;
				} else if (item.type === "award") {
					li = `<li class="row"><div class="time col-3">Award</div><div class="text col-8 offset-1">${item.text}</div></li>`;
        }

				html += li;
			}

			document.getElementById(key).innerHTML = html;
		}

	}
}

createLI(data);
