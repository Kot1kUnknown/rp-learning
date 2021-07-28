import React, { useState, useRef, useEffect } from "react";
import {
	AdaptivityProvider,
	ConfigProvider,
	useAdaptivity,
	AppRoot,
	SplitLayout,
	SplitCol,
	ViewWidth,
	View,
	Panel,
	PanelHeader,
	Header,
	Group,
	SimpleCell,
	usePlatform,
	Platform,
	ViewHeight,
	Tabbar,
	TabbarItem,
	VKCOM,
	CardGrid,
	Card,
	Placeholder,
	Button,
	Banner,
	Div,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { Epic } from "@vkontakte/vkui/dist/components/Epic/Epic";
import {
	Icon28ArticleOutline,
	Icon28Search,
	Icon28EducationOutline,
	Icon36CancelOutline,
	Icon24BrowserForward,
	Icon24BrowserBack,
} from '@vkontakte/icons';


const App = () => {
	const [activePanel, setActivePanel] = useState('main');
	const [activeStory, setActiveStory] = useState("server");


	return (
		<ConfigProvider>
			<AppRoot>
				<SplitLayout>
					<SplitCol>
						<Epic activeStory={activeStory} tabbar={
							<Tabbar>
								<TabbarItem
									text='Топ серверов'
									selected={activeStory === "server"}
									onClick={e => setActiveStory(e.currentTarget.dataset.story)}
									data-story='server'
								>
									<Icon28Search />
								</TabbarItem>

								<TabbarItem
									text='Учебник'
									selected={activeStory === "learning"}
									onClick={e => setActiveStory(e.currentTarget.dataset.story)}
									data-story='learning'
								>
									<Icon28EducationOutline />
								</TabbarItem>

								<TabbarItem
									text='Тестирование'
									selected={activeStory === "tests"}
									onClick={e => setActiveStory(e.currentTarget.dataset.story)}
									data-story='tests'
								>
									<Icon28ArticleOutline />
								</TabbarItem>
							</Tabbar>
						}>

							<View activePanel={activePanel} id="server">
								<Panel id="main">
									<PanelHeader>Каталог</PanelHeader>
									<Group>
										<Banner
											mode="image"
											size="m"
											header={<span>Limit Of Desire</span>}
											subheader="DayZ RP · S.T.A.L.K.E.R."
											background={
												<div
													style={{
														backgroundColor: '#000',
														backgroundImage: 'url(https://i.ibb.co/qNCM58w/lod.jpg)',
														backgroundPosition: 'right bottom',
														backgroundSize: 340,
														backgroundRepeat: 'no-repeat',
													}}
												/>
											}
											actions={<Button href="https://vk.com/limitofdesire" mode="overlay_primary" size="m">Играть!</Button>}
										/>

										<Banner
											mode="image"
											size="m"
											header={<span>New Story</span>}
											subheader="DayZ RP · S.T.A.L.K.E.R."
											background={
												<div
													style={{
														backgroundColor: '#000',
														backgroundImage: 'url(https://i.ibb.co/sWQYCk9/new-story.jpg)',
														backgroundPosition: 'right bottom',
														backgroundSize: 340,
														backgroundRepeat: 'no-repeat',
													}}
												/>
											}
											actions={<Button href="https://vk.com/stalk_dayz" mode="overlay_primary" size="m">Играть!</Button>}
										/>

										<Banner
											mode="image"
											size="m"
											header={<span>DarkWay</span>}
											subheader="DayZ RP · S.T.A.L.K.E.R."
											background={
												<div
													style={{
														backgroundColor: '#000',
														backgroundImage: 'url(https://i.ibb.co/1M9K0yn/darkway.jpg)',
														backgroundPosition: 'right bottom',
														backgroundSize: 340,
														backgroundRepeat: 'no-repeat',
													}}
												/>
											}
											actions={<Button href="https://vk.com/dayz_darkway" mode="overlay_primary" size="m">Играть!</Button>}
										/>

										<Banner
											mode="image"
											size="m"
											header={<span>Alternate</span>}
											subheader="DayZ RP · S.T.A.L.K.E.R."
											background={
												<div
													style={{
														backgroundColor: '#000',
														backgroundImage: 'url(https://i.ibb.co/khvMyJd/alternate.jpg)',
														backgroundPosition: 'right bottom',
														backgroundSize: 340,
														backgroundRepeat: 'no-repeat',
													}}
												/>
											}
											actions={<Button href="https://vk.com/alternaterp" mode="overlay_primary" size="m">Играть!</Button>}
										/>
										<Placeholder
											action={<Button size="m" mode="tertiary" href="https://discord.gg/YKdS8gbbxG">Показать больше серверов</Button>}
										/>
									</Group>
								</Panel>
							</View>

							<View activePanel={activePanel} id="learning">
								<Panel id="main">
									<PanelHeader>Учебник</PanelHeader>
									<Group>
										<Banner
											mode="image"
											size="m"
											header={<span>Глава 1</span>}
											subheader="Где я?!"
											background={
												<div
													style={{
														backgroundColor: '#000',
														backgroundImage: 'url(https://i.ibb.co/d5KxKKG/black-fill.jpg)',
														backgroundPosition: 'right bottom',
														backgroundSize: 340,
														backgroundRepeat: 'no-repeat',
													}}
												/>
											}
											actions={<Button onClick={() => setActivePanel('glava1')} mode="overlay_primary" size="m">Читать</Button>}
										/>

										<Banner
											mode="image"
											size="m"
											header={<span>Глава 2</span>}
											subheader="Основы основ"
											background={
												<div
													style={{
														backgroundColor: '#000',
														backgroundImage: 'url(https://i.ibb.co/d5KxKKG/black-fill.jpg)',
														backgroundPosition: 'right bottom',
														backgroundSize: 340,
														backgroundRepeat: 'no-repeat',
													}}
												/>
											}
											actions={<Button onClick={() => setActivePanel('glava2')} mode="overlay_primary" size="m">Читать</Button>}
										/>

										<Banner
											mode="image"
											size="m"
											header={<span>Глава 3</span>}
											subheader="Как поступать в различных ситуациях?"
											background={
												<div
													style={{
														backgroundColor: '#000',
														backgroundImage: 'url(https://i.ibb.co/d5KxKKG/black-fill.jpg)',
														backgroundPosition: 'right bottom',
														backgroundSize: 340,
														backgroundRepeat: 'no-repeat',
													}}
												/>
											}
											actions={<Button onClick={() => setActivePanel('glava3')} mode="overlay_primary" size="m">Читать</Button>}
										/>

										<Banner
											mode="image"
											size="m"
											header={<span>Глава 4</span>}
											subheader="Собеседование - не страшно"
											background={
												<div
													style={{
														backgroundColor: '#000',
														backgroundImage: 'url(https://i.ibb.co/d5KxKKG/black-fill.jpg)',
														backgroundPosition: 'right bottom',
														backgroundSize: 340,
														backgroundRepeat: 'no-repeat',
													}}
												/>
											}
											actions={<Button onClick={() => setActivePanel('glava4')} mode="overlay_primary" size="m">Читать</Button>}
										/>
									</Group>
								</Panel>

								<Panel id="glava1">
									<PanelHeader>
										Глава 1 - Где я?!
									</PanelHeader>
									<Group>
										<Div style={{ paddingTop: 20, paddingBottom: 30, color: 'gray' }}>
											И так, что же такое РП? РП или же Role-Play - отыгровка своей роли, то есть вы должны поступать в игре так, как поступили бы в реальной жизни.
											<br />
											<br />
											На большинстве проектов правила очень похожи, но, конечно же, бывают и исключения: проекты у которых своя уникальная механика, экономика, а значит и свои уникальные правила. Колличество таких проектов можно посчтитать на пальцах одно руки... да-да, таких настоящих уникальных проектов единицы, увы :(
											<br />
											<h4>Относитесь к игрокам и администрации так, как хотел бы, чтобы относились к тебе. Безусловно это очень важно, конечно администрация проектов будет с вами максимально вежливыми, но и вы не будьте исключение</h4>
											<br />
											На этом первая глава закончилась! Жми на кнопку ниже, чтобы продолжить :3
										</Div>
										<Div style={{ display: 'flex' }}>
											<Button onClick={() => setActivePanel('main')} size="l" before={<Icon24BrowserBack />} stretched>Выйти</Button>
											<Button onClick={() => setActivePanel('glava2')} size="l" after={<Icon24BrowserForward />} style={{ marginLeft: 8 }} stretched>Глава 2</Button>
										</Div>
									</Group>
								</Panel>

								<Panel id="glava2">
									<PanelHeader>
										Глава 2 - Основы основ
									</PanelHeader>
									<Group>
										<Div style={{ paddingTop: 20, paddingBottom: 30, color: 'gray' }}>
											После того, как мы разобрались что такое РП, думаю, мы можем продвинуться дальше, а именно к правилам которые есть на каждом сервере.
											<br />
											<br />
											Начнем с RDM - Random Death Match - убийство игрока(ов) без веской на то причины, значит вы не можете убить кого-то "просто так".
											<br />
											<br />
											NonRP - неотыгровка своей роли, значит вам нужно отыгрывать свою роль и главное: вести себя адекватно.
											<br />
											<br />
											От NonRP следует и NonRP-речь - на разных серверах это правила называется по разному, иногда его даже соединяют с простым NonRP, но все же: запрещается говорить NonRP словами, например: залутал, кильнул, шотнул, заюзал и т.д.
											<br />
											<br />
											MetaGaming - одно из самых главных, вы не можете использовать информацию информацию, полученную внеигровым путем, занчит, что вы не можете увидить сообщение, например в Discord, и использовать это сообщение в качестве докозательства чего-либо во время игрового процесса или же увидеть в видео у Ютубера как пройти на какую-нибудь базу и в самой игре побежать на нее, не получив информацию о местонахождении базы "по РП".
											<br />
											<br />
											PowerGaming - вы не супер-герой и не можете в одно лицо лезть, например, на 3-х вооруженных военных. Значит, что вы как и в жизни должны боятся за свою жизнь. <h4>Примечание: бояться за свою жизнь, а не за свой лут.</h4>
											<br />
											Вот и вторая глава подошла к концу! Жми на кнопку ниже, чтобы продолжить :3
										</Div>
										<Div style={{ display: 'flex' }}>
											<Button onClick={() => setActivePanel('glava1')} size="l" before={<Icon24BrowserBack />} stretched>Глава 1</Button>
											<Button onClick={() => setActivePanel('glava3')} size="l" after={<Icon24BrowserForward />} style={{ marginLeft: 8 }} stretched>Глава 3</Button>
										</Div>
									</Group>
								</Panel>

								<Panel id="glava3">
									<PanelHeader>
										Глава 3 - Как поступать в различных ситуациях?
									</PanelHeader>
									<Group>
										<Div style={{ paddingTop: 20, paddingBottom: 30, color: 'gray' }}>
											Чато в РП встречаются спорные ситуации, в которых вы просто не понимаете что делать :(
											<br />
											Сейчас мы разберем пару из них и подумаем что и в какой ситуации делать.
											<br />
											<br />
											Представим ситуацию: идет 6 сталкеров, снаряжение простое - дробовик, джинсы, свитер. На встречу к ним идет 1 бандит, у него снаряжение по-лучше - АК, балаклава, неплохой рюкзачек, одет в спортивку(штаны, курточка). И так, этот бандит начал докапываться до сталкеров, сталкера начали угрожать дробовиком, но бандит их убил. Есть ли здесь нарушения?
											<br />
											Все таки нарушений нет, если бы бандит погиб - был бы PowerGaming, а т.к. он убил сталкеров и остался жив - PowerGaming не засчитывается
											<br />
											<br />
											Следующая ситуация: 3 человека решили пойти РПшить на сервер. Прошли собеседование, все дела, создали discord группу на 3-их и там рассказывали друг другу разную информацию, преминяя ее в игре. Есть ли здесь нарушения?
											<br />
											Конечно есть, это MetaGaming, потому что они не только обменивались информацияей вне игры, да еще и преминяли ее!
											<br />
											<br />
											<h4>На этом впринцепи все, думаю это достаточно, чтобы понять основную мысль. Перейти к последней - финальной главе можно нажав на кнопочку :)</h4>

										</Div>
										<Div style={{ display: 'flex' }}>
											<Button onClick={() => setActivePanel('glava2')} size="l" before={<Icon24BrowserBack />} stretched>Глава 2</Button>
											<Button onClick={() => setActivePanel('glava4')} size="l" after={<Icon24BrowserForward />} style={{ marginLeft: 8 }} stretched>Глава 4</Button>
										</Div>
									</Group>
								</Panel>

								<Panel id="glava4">
									<PanelHeader>
										Глава 4 - Собеседование - не страшно!
									</PanelHeader>
									<Group>
										<Div style={{ paddingTop: 20, paddingBottom: 30, color: 'gray' }}>
											Дайте угадаю: боитесь проходить собеседование? Ничего, я попробую вам помочь :3
											<br />
											<br />
											В собеседование и в самих Хелперах(люди, которые проводят собеседования) ничего страшного нет. Хелперы - такие же игроки, как и вы, только они знают правила, как свои 5 пальцев :)
											<br />
											<br />
											Для того, чтобы успешно пройти собеседование, вам нужно выучить правило сервера и ЛОР. ЛОР - это, как бы, история сервера. На каждом сервере свой ЛОР. Зараннее все хорошо выучите, чтобы не отнимать время ни у себя, ни у Хелперов. Будьте добры к проводящему собеседование и он к вам тоже будет добр!
											<br />
											<h4>Увы, но это все, что я могу сказать о собеседованиях. Желаю вам удачи!</h4>
										</Div>
										<Div style={{ display: 'flex' }}>
											<Button onClick={() => setActivePanel('glava3')} size="l" before={<Icon24BrowserBack />} stretched>Глава 3</Button>
											<Button onClick={() => setActivePanel('main')} size="l" after={<Icon24BrowserForward />} style={{ marginLeft: 8 }} stretched>Завершить!</Button>
										</Div>
									</Group>
								</Panel>
							</View>

							<View activePanel={activePanel} id="tests">
								<Panel id="main">
									<PanelHeader>Тестирование знаний</PanelHeader>
									<Group>
										<Placeholder icon={<Icon36CancelOutline width={76} height={76} />}> <h1 style={{ fontFamily: 'VK Sans Display' }}>Раздел еще не доделан!</h1> </Placeholder>
									</Group>
								</Panel>
							</View>

							{/* onClick={() => setActivePanel('glava')} */}


						</Epic>
					</SplitCol>
				</SplitLayout>
			</AppRoot>
		</ConfigProvider>
	);
};

export default App;
