import { $l as __generator, Bl as Observable, En as ElementRef, Eo as ɵɵgetInheritedFactory, Fn as Injectable, Gl as reportUnhandledError, Hi as setClassMetadata, In as Input, Jl as isFunction, Ll as Subject, Ls as ɵɵstyleProp, Nc as NgZone, O as booleanAttribute, Ol as ɵɵinject, Pn as Inject, Ql as __awaiter, Qn as Optional, Rl as createOperatorSubscriber, Tc as Injector, Ti as performanceMarkFeature, Ul as observable, Vc as RuntimeError, Xl as __asyncValues, Yl as __asyncGenerator, Zi as unwrapSafeValue, Zl as __await, al as inject, bc as IMAGE_CONFIG_DEFAULTS, dr as Service, el as formatRuntimeError, eo as ɵɵdefineDirective, fc as DOCUMENT, ir as Renderer2, nu as __values, pc as DestroyRef, r as ChangeDetectorRef, ro as ɵɵdefineService, rt as numberAttribute, sa as ɵɵNgOnChangesFeature, tn as ApplicationRef, wc as InjectionToken, wl as ɵɵdefineInjectable, wn as Directive, yc as IMAGE_CONFIG, zl as operate } from "./core-BOi6uYdK.js";
//#region node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
function isScheduler(value) {
	return value && isFunction(value.schedule);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/args.js
function last(arr) {
	return arr[arr.length - 1];
}
function popResultSelector(args) {
	return isFunction(last(args)) ? args.pop() : void 0;
}
function popScheduler(args) {
	return isScheduler(last(args)) ? args.pop() : void 0;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = (function(x) {
	return x && typeof x.length === "number" && typeof x !== "function";
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isPromise.js
function isPromise(value) {
	return isFunction(value === null || value === void 0 ? void 0 : value.then);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function isInteropObservable(input) {
	return isFunction(input[observable]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function isAsyncIterable(obj) {
	return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
	return /* @__PURE__ */ new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
	if (typeof Symbol !== "function" || !Symbol.iterator) return "@@iterator";
	return Symbol.iterator;
}
var iterator = getSymbolIterator();
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isIterable.js
function isIterable(input) {
	return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
function readableStreamLikeToAsyncGenerator(readableStream) {
	return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
		var reader, _a, value, done;
		return __generator(this, function(_b) {
			switch (_b.label) {
				case 0:
					reader = readableStream.getReader();
					_b.label = 1;
				case 1:
					_b.trys.push([
						1,
						,
						9,
						10
					]);
					_b.label = 2;
				case 2: return [4, __await(reader.read())];
				case 3:
					_a = _b.sent(), value = _a.value, done = _a.done;
					if (!done) return [3, 5];
					return [4, __await(void 0)];
				case 4: return [2, _b.sent()];
				case 5: return [4, __await(value)];
				case 6: return [4, _b.sent()];
				case 7:
					_b.sent();
					return [3, 2];
				case 8: return [3, 10];
				case 9:
					reader.releaseLock();
					return [7];
				case 10: return [2];
			}
		});
	});
}
function isReadableStreamLike(obj) {
	return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
function innerFrom(input) {
	if (input instanceof Observable) return input;
	if (input != null) {
		if (isInteropObservable(input)) return fromInteropObservable(input);
		if (isArrayLike(input)) return fromArrayLike(input);
		if (isPromise(input)) return fromPromise(input);
		if (isAsyncIterable(input)) return fromAsyncIterable(input);
		if (isIterable(input)) return fromIterable(input);
		if (isReadableStreamLike(input)) return fromReadableStreamLike(input);
	}
	throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
	return new Observable(function(subscriber) {
		var obs = obj[observable]();
		if (isFunction(obs.subscribe)) return obs.subscribe(subscriber);
		throw new TypeError("Provided object does not correctly implement Symbol.observable");
	});
}
function fromArrayLike(array) {
	return new Observable(function(subscriber) {
		for (var i = 0; i < array.length && !subscriber.closed; i++) subscriber.next(array[i]);
		subscriber.complete();
	});
}
function fromPromise(promise) {
	return new Observable(function(subscriber) {
		promise.then(function(value) {
			if (!subscriber.closed) {
				subscriber.next(value);
				subscriber.complete();
			}
		}, function(err) {
			return subscriber.error(err);
		}).then(null, reportUnhandledError);
	});
}
function fromIterable(iterable) {
	return new Observable(function(subscriber) {
		var e_1, _a;
		try {
			for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
				var value = iterable_1_1.value;
				subscriber.next(value);
				if (subscriber.closed) return;
			}
		} catch (e_1_1) {
			e_1 = { error: e_1_1 };
		} finally {
			try {
				if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
			} finally {
				if (e_1) throw e_1.error;
			}
		}
		subscriber.complete();
	});
}
function fromAsyncIterable(asyncIterable) {
	return new Observable(function(subscriber) {
		process(asyncIterable, subscriber).catch(function(err) {
			return subscriber.error(err);
		});
	});
}
function fromReadableStreamLike(readableStream) {
	return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
	var asyncIterable_1, asyncIterable_1_1;
	var e_2, _a;
	return __awaiter(this, void 0, void 0, function() {
		var value, e_2_1;
		return __generator(this, function(_b) {
			switch (_b.label) {
				case 0:
					_b.trys.push([
						0,
						5,
						6,
						11
					]);
					asyncIterable_1 = __asyncValues(asyncIterable);
					_b.label = 1;
				case 1: return [4, asyncIterable_1.next()];
				case 2:
					if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
					value = asyncIterable_1_1.value;
					subscriber.next(value);
					if (subscriber.closed) return [2];
					_b.label = 3;
				case 3: return [3, 1];
				case 4: return [3, 11];
				case 5:
					e_2_1 = _b.sent();
					e_2 = { error: e_2_1 };
					return [3, 11];
				case 6:
					_b.trys.push([
						6,
						,
						9,
						10
					]);
					if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
					return [4, _a.call(asyncIterable_1)];
				case 7:
					_b.sent();
					_b.label = 8;
				case 8: return [3, 10];
				case 9:
					if (e_2) throw e_2.error;
					return [7];
				case 10: return [7];
				case 11:
					subscriber.complete();
					return [2];
			}
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
	if (delay === void 0) delay = 0;
	if (repeat === void 0) repeat = false;
	var scheduleSubscription = scheduler.schedule(function() {
		work();
		if (repeat) parentSubscription.add(this.schedule(null, delay));
		else this.unsubscribe();
	}, delay);
	parentSubscription.add(scheduleSubscription);
	if (!repeat) return scheduleSubscription;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function observeOn(scheduler, delay) {
	if (delay === void 0) delay = 0;
	return operate(function(source, subscriber) {
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			return executeSchedule(subscriber, scheduler, function() {
				return subscriber.next(value);
			}, delay);
		}, function() {
			return executeSchedule(subscriber, scheduler, function() {
				return subscriber.complete();
			}, delay);
		}, function(err) {
			return executeSchedule(subscriber, scheduler, function() {
				return subscriber.error(err);
			}, delay);
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay) {
	if (delay === void 0) delay = 0;
	return operate(function(source, subscriber) {
		subscriber.add(scheduler.schedule(function() {
			return source.subscribe(subscriber);
		}, delay));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
	return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
	return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
	return new Observable(function(subscriber) {
		var i = 0;
		return scheduler.schedule(function() {
			if (i === input.length) subscriber.complete();
			else {
				subscriber.next(input[i++]);
				if (!subscriber.closed) this.schedule();
			}
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
	return new Observable(function(subscriber) {
		var iterator$1;
		executeSchedule(subscriber, scheduler, function() {
			iterator$1 = input[iterator]();
			executeSchedule(subscriber, scheduler, function() {
				var _a;
				var value;
				var done;
				try {
					_a = iterator$1.next(), value = _a.value, done = _a.done;
				} catch (err) {
					subscriber.error(err);
					return;
				}
				if (done) subscriber.complete();
				else subscriber.next(value);
			}, 0, true);
		});
		return function() {
			return isFunction(iterator$1 === null || iterator$1 === void 0 ? void 0 : iterator$1.return) && iterator$1.return();
		};
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
function scheduleAsyncIterable(input, scheduler) {
	if (!input) throw new Error("Iterable cannot be null");
	return new Observable(function(subscriber) {
		executeSchedule(subscriber, scheduler, function() {
			var iterator = input[Symbol.asyncIterator]();
			executeSchedule(subscriber, scheduler, function() {
				iterator.next().then(function(result) {
					if (result.done) subscriber.complete();
					else subscriber.next(result.value);
				});
			}, 0, true);
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
function scheduleReadableStreamLike(input, scheduler) {
	return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
	if (input != null) {
		if (isInteropObservable(input)) return scheduleObservable(input, scheduler);
		if (isArrayLike(input)) return scheduleArray(input, scheduler);
		if (isPromise(input)) return schedulePromise(input, scheduler);
		if (isAsyncIterable(input)) return scheduleAsyncIterable(input, scheduler);
		if (isIterable(input)) return scheduleIterable(input, scheduler);
		if (isReadableStreamLike(input)) return scheduleReadableStreamLike(input, scheduler);
	}
	throw createInvalidObservableTypeError(input);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/from.js
function from(input, scheduler) {
	return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
//#endregion
//#region node_modules/@angular/common/fesm2022/_platform_location-chunk.mjs
/**
* @license Angular v22.1.0
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var _DOM = null;
function getDOM() {
	return _DOM;
}
function setRootDomAdapter(adapter) {
	_DOM ??= adapter;
}
var DomAdapter = class {};
var PlatformLocation = class PlatformLocation {
	historyGo(relativePosition) {
		throw new Error(ngDevMode ? "Not implemented" : "");
	}
	static ɵfac = function PlatformLocation_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PlatformLocation)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: PlatformLocation,
		factory: () => (() => inject(BrowserPlatformLocation))(),
		providedIn: "platform"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformLocation, [{
		type: Injectable,
		args: [{
			providedIn: "platform",
			useFactory: () => inject(BrowserPlatformLocation)
		}]
	}], null, null);
})();
var LOCATION_INITIALIZED = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "Location Initialized" : "");
var BrowserPlatformLocation = class BrowserPlatformLocation extends PlatformLocation {
	_location;
	_history;
	_doc = inject(DOCUMENT);
	constructor() {
		super();
		this._location = window.location;
		this._history = window.history;
	}
	getBaseHrefFromDOM() {
		return getDOM().getBaseHref(this._doc);
	}
	onPopState(fn) {
		const window = getDOM().getGlobalEventTarget(this._doc, "window");
		window.addEventListener("popstate", fn, false);
		return () => window.removeEventListener("popstate", fn);
	}
	onHashChange(fn) {
		const window = getDOM().getGlobalEventTarget(this._doc, "window");
		window.addEventListener("hashchange", fn, false);
		return () => window.removeEventListener("hashchange", fn);
	}
	get href() {
		return this._location.href;
	}
	get protocol() {
		return this._location.protocol;
	}
	get hostname() {
		return this._location.hostname;
	}
	get port() {
		return this._location.port;
	}
	get pathname() {
		return this._location.pathname;
	}
	get search() {
		return this._location.search;
	}
	get hash() {
		return this._location.hash;
	}
	set pathname(newPath) {
		this._location.pathname = newPath;
	}
	pushState(state, title, url) {
		this._history.pushState(state, title, url);
	}
	replaceState(state, title, url) {
		this._history.replaceState(state, title, url);
	}
	forward() {
		this._history.forward();
	}
	back() {
		this._history.back();
	}
	historyGo(relativePosition = 0) {
		this._history.go(relativePosition);
	}
	getState() {
		return this._history.state;
	}
	static ɵfac = function BrowserPlatformLocation_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BrowserPlatformLocation)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: BrowserPlatformLocation,
		factory: () => (() => new BrowserPlatformLocation())(),
		providedIn: "platform"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserPlatformLocation, [{
		type: Injectable,
		args: [{
			providedIn: "platform",
			useFactory: () => new BrowserPlatformLocation()
		}]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@angular/common/fesm2022/_location-chunk.mjs
/**
* @license Angular v22.1.0
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
function joinWithSlash(start, end) {
	if (!start) return end;
	if (!end) return start;
	if (start.endsWith("/")) return end.startsWith("/") ? start + end.slice(1) : start + end;
	return end.startsWith("/") ? start + end : `${start}/${end}`;
}
function stripTrailingSlash(url) {
	const pathEndIdx = url.search(/#|\?|$/);
	return url[pathEndIdx - 1] === "/" ? url.slice(0, pathEndIdx - 1) + url.slice(pathEndIdx) : url;
}
function normalizeQueryParams(params) {
	return params && params[0] !== "?" ? `?${params}` : params;
}
var LocationStrategy = class LocationStrategy {
	historyGo(relativePosition) {
		throw new Error(ngDevMode ? "Not implemented" : "");
	}
	static ɵfac = function LocationStrategy_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || LocationStrategy)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: LocationStrategy,
		factory: () => (() => inject(PathLocationStrategy))(),
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationStrategy, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useFactory: () => inject(PathLocationStrategy)
		}]
	}], null, null);
})();
var APP_BASE_HREF = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "appBaseHref" : "");
var PathLocationStrategy = class PathLocationStrategy extends LocationStrategy {
	_platformLocation;
	_baseHref;
	_removeListenerFns = [];
	constructor(_platformLocation, href) {
		super();
		this._platformLocation = _platformLocation;
		this._baseHref = href ?? this._platformLocation.getBaseHrefFromDOM() ?? inject(DOCUMENT).location?.origin ?? "";
	}
	ngOnDestroy() {
		while (this._removeListenerFns.length) this._removeListenerFns.pop()();
	}
	onPopState(fn) {
		this._removeListenerFns.push(this._platformLocation.onPopState(fn), this._platformLocation.onHashChange(fn));
	}
	getBaseHref() {
		return this._baseHref;
	}
	prepareExternalUrl(internal) {
		return joinWithSlash(this._baseHref, internal);
	}
	path(includeHash = false) {
		const pathname = this._platformLocation.pathname + normalizeQueryParams(this._platformLocation.search);
		const hash = this._platformLocation.hash;
		return hash && includeHash ? `${pathname}${hash}` : pathname;
	}
	pushState(state, title, url, queryParams) {
		const externalUrl = this.prepareExternalUrl(url + normalizeQueryParams(queryParams));
		this._platformLocation.pushState(state, title, externalUrl);
	}
	replaceState(state, title, url, queryParams) {
		const externalUrl = this.prepareExternalUrl(url + normalizeQueryParams(queryParams));
		this._platformLocation.replaceState(state, title, externalUrl);
	}
	forward() {
		this._platformLocation.forward();
	}
	back() {
		this._platformLocation.back();
	}
	getState() {
		return this._platformLocation.getState();
	}
	historyGo(relativePosition = 0) {
		this._platformLocation.historyGo?.(relativePosition);
	}
	static ɵfac = function PathLocationStrategy_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PathLocationStrategy)(ɵɵinject(PlatformLocation), ɵɵinject(APP_BASE_HREF, 8));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: PathLocationStrategy,
		factory: PathLocationStrategy.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PathLocationStrategy, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [{ type: PlatformLocation }, {
		type: void 0,
		decorators: [{ type: Optional }, {
			type: Inject,
			args: [APP_BASE_HREF]
		}]
	}], null);
})();
var NoTrailingSlashPathLocationStrategy = class NoTrailingSlashPathLocationStrategy extends PathLocationStrategy {
	prepareExternalUrl(internal) {
		const path = extractUrlPath(internal);
		if (path.endsWith("/") && path.length > 1) internal = path.slice(0, -1) + internal.slice(path.length);
		return super.prepareExternalUrl(internal);
	}
	static ɵfac = /* @__PURE__ */ (() => {
		let ɵNoTrailingSlashPathLocationStrategy_BaseFactory;
		return function NoTrailingSlashPathLocationStrategy_Factory(__ngFactoryType__) {
			return (ɵNoTrailingSlashPathLocationStrategy_BaseFactory || (ɵNoTrailingSlashPathLocationStrategy_BaseFactory = ɵɵgetInheritedFactory(NoTrailingSlashPathLocationStrategy)))(__ngFactoryType__ || NoTrailingSlashPathLocationStrategy);
		};
	})();
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: NoTrailingSlashPathLocationStrategy,
		factory: NoTrailingSlashPathLocationStrategy.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoTrailingSlashPathLocationStrategy, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var TrailingSlashPathLocationStrategy = class TrailingSlashPathLocationStrategy extends PathLocationStrategy {
	prepareExternalUrl(internal) {
		const path = extractUrlPath(internal);
		if (!path.endsWith("/")) internal = path + "/" + internal.slice(path.length);
		return super.prepareExternalUrl(internal);
	}
	static ɵfac = /* @__PURE__ */ (() => {
		let ɵTrailingSlashPathLocationStrategy_BaseFactory;
		return function TrailingSlashPathLocationStrategy_Factory(__ngFactoryType__) {
			return (ɵTrailingSlashPathLocationStrategy_BaseFactory || (ɵTrailingSlashPathLocationStrategy_BaseFactory = ɵɵgetInheritedFactory(TrailingSlashPathLocationStrategy)))(__ngFactoryType__ || TrailingSlashPathLocationStrategy);
		};
	})();
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: TrailingSlashPathLocationStrategy,
		factory: TrailingSlashPathLocationStrategy.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrailingSlashPathLocationStrategy, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
function extractUrlPath(url) {
	const questionMarkOrHashIndex = url.search(/[?#]/);
	const pathEnd = questionMarkOrHashIndex > -1 ? questionMarkOrHashIndex : url.length;
	return url.slice(0, pathEnd);
}
var Location = class Location {
	_subject = new Subject();
	_basePath;
	_locationStrategy;
	_urlChangeListeners = [];
	_urlChangeSubscription = null;
	constructor(locationStrategy) {
		this._locationStrategy = locationStrategy;
		const baseHref = this._locationStrategy.getBaseHref();
		this._basePath = _stripOrigin(stripTrailingSlash(_stripIndexHtml(baseHref)));
		this._locationStrategy.onPopState((ev) => {
			this._subject.next({
				"url": this.path(true),
				"pop": true,
				"state": ev.state,
				"type": ev.type
			});
		});
	}
	ngOnDestroy() {
		this._urlChangeSubscription?.unsubscribe();
		this._urlChangeListeners = [];
	}
	path(includeHash = false) {
		return this.normalize(this._locationStrategy.path(includeHash));
	}
	getState() {
		return this._locationStrategy.getState();
	}
	isCurrentPathEqualTo(path, query = "") {
		return this.path() == this.normalize(path + normalizeQueryParams(query));
	}
	normalize(url) {
		return Location.stripTrailingSlash(_stripBasePath(this._basePath, _stripIndexHtml(url)));
	}
	prepareExternalUrl(url) {
		if (url && url[0] !== "/") url = "/" + url;
		return this._locationStrategy.prepareExternalUrl(url);
	}
	go(path, query = "", state = null) {
		this._locationStrategy.pushState(state, "", path, query);
		this._notifyUrlChangeListeners(this.prepareExternalUrl(path + normalizeQueryParams(query)), state);
	}
	replaceState(path, query = "", state = null) {
		this._locationStrategy.replaceState(state, "", path, query);
		this._notifyUrlChangeListeners(this.prepareExternalUrl(path + normalizeQueryParams(query)), state);
	}
	forward() {
		this._locationStrategy.forward();
	}
	back() {
		this._locationStrategy.back();
	}
	historyGo(relativePosition = 0) {
		this._locationStrategy.historyGo?.(relativePosition);
	}
	onUrlChange(fn) {
		this._urlChangeListeners.push(fn);
		this._urlChangeSubscription ??= this.subscribe((v) => {
			this._notifyUrlChangeListeners(v.url, v.state);
		});
		return () => {
			const fnIndex = this._urlChangeListeners.indexOf(fn);
			this._urlChangeListeners.splice(fnIndex, 1);
			if (this._urlChangeListeners.length === 0) {
				this._urlChangeSubscription?.unsubscribe();
				this._urlChangeSubscription = null;
			}
		};
	}
	_notifyUrlChangeListeners(url = "", state) {
		this._urlChangeListeners.forEach((fn) => fn(url, state));
	}
	subscribe(onNext, onThrow, onReturn) {
		return this._subject.subscribe({
			next: onNext,
			error: onThrow ?? void 0,
			complete: onReturn ?? void 0
		});
	}
	static normalizeQueryParams = normalizeQueryParams;
	static joinWithSlash = joinWithSlash;
	static stripTrailingSlash = stripTrailingSlash;
	static ɵfac = function Location_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Location)(ɵɵinject(LocationStrategy));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: Location,
		factory: () => createLocation(),
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Location, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useFactory: createLocation
		}]
	}], () => [{ type: LocationStrategy }], null);
})();
function createLocation() {
	return new Location(ɵɵinject(LocationStrategy));
}
function _stripBasePath(basePath, url) {
	if (!basePath || !url.startsWith(basePath)) return url;
	const strippedUrl = url.substring(basePath.length);
	if (strippedUrl === "" || [
		"/",
		";",
		"?",
		"#"
	].includes(strippedUrl[0])) return strippedUrl;
	return url;
}
function _stripIndexHtml(url) {
	return url.replace(/\/index\.html$/, "");
}
function _stripOrigin(baseHref) {
	if ((/* @__PURE__ */ new RegExp("^(https?:)?//")).test(baseHref)) {
		const [, pathname] = baseHref.split(/\/\/[^\/]+/);
		return pathname;
	}
	return baseHref;
}
//#endregion
//#region node_modules/@angular/common/fesm2022/_platform_navigation-chunk.mjs
/**
* @license Angular v22.1.0
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var PRECOMMIT_HANDLER_SUPPORTED = new InjectionToken("", { factory: () => {
	return typeof window !== "undefined" && typeof window.NavigationPrecommitController !== "undefined";
} });
var PlatformNavigation = class PlatformNavigation {
	static ɵfac = function PlatformNavigation_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PlatformNavigation)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: PlatformNavigation,
		factory: () => (() => window.navigation)(),
		providedIn: "platform"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformNavigation, [{
		type: Injectable,
		args: [{
			providedIn: "platform",
			useFactory: () => window.navigation
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@angular/common/fesm2022/common.mjs
/**
* @license Angular v22.1.0
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var NavigationAdapterForLocation = class NavigationAdapterForLocation extends Location {
	navigation = inject(PlatformNavigation);
	destroyRef = inject(DestroyRef);
	constructor() {
		super(inject(LocationStrategy));
		this.registerNavigationListeners();
	}
	registerNavigationListeners() {
		const currentEntryChangeListener = () => {
			this._notifyUrlChangeListeners(this.path(true), this.getState());
		};
		this.navigation.addEventListener("currententrychange", currentEntryChangeListener);
		this.destroyRef.onDestroy(() => {
			this.navigation.removeEventListener("currententrychange", currentEntryChangeListener);
		});
	}
	getState() {
		return this.navigation.currentEntry?.getState();
	}
	replaceState(path, query = "", state = null) {
		const url = this.prepareExternalUrl(path + normalizeQueryParams(query));
		this.navigation.navigate(url, {
			state,
			history: "replace"
		});
	}
	go(path, query = "", state = null) {
		const url = this.prepareExternalUrl(path + normalizeQueryParams(query));
		this.navigation.navigate(url, {
			state,
			history: "push"
		});
	}
	back() {
		this.navigation.back();
	}
	forward() {
		this.navigation.forward();
	}
	onUrlChange(fn) {
		this._urlChangeListeners.push(fn);
		return () => {
			const fnIndex = this._urlChangeListeners.indexOf(fn);
			this._urlChangeListeners.splice(fnIndex, 1);
		};
	}
	static ɵfac = function NavigationAdapterForLocation_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NavigationAdapterForLocation)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: NavigationAdapterForLocation,
		factory: NavigationAdapterForLocation.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationAdapterForLocation, [{ type: Injectable }], () => [], null);
})();
var PLATFORM_BROWSER_ID = "browser";
var ViewportScroller = class ViewportScroller {
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: ViewportScroller,
		providedIn: "root",
		factory: () => new BrowserViewportScroller(inject(DOCUMENT), window)
	});
};
var BrowserViewportScroller = class {
	document;
	window;
	offset = () => [0, 0];
	constructor(document, window) {
		this.document = document;
		this.window = window;
	}
	setOffset(offset) {
		if (Array.isArray(offset)) this.offset = () => offset;
		else this.offset = offset;
	}
	getScrollPosition() {
		return [this.window.scrollX, this.window.scrollY];
	}
	scrollToPosition(position, options) {
		this.window.scrollTo({
			...options,
			left: position[0],
			top: position[1]
		});
	}
	scrollToAnchor(target, options) {
		const elSelected = findAnchorFromDocument(this.document, target);
		if (elSelected) {
			this.scrollToElement(elSelected, options);
			elSelected.focus({ preventScroll: true });
		}
	}
	setHistoryScrollRestoration(scrollRestoration) {
		try {
			this.window.history.scrollRestoration = scrollRestoration;
		} catch {
			console.warn(formatRuntimeError(2400, ngDevMode && "Failed to set `window.history.scrollRestoration`. This may occur when:\n• The script is running inside a sandboxed iframe\n• The window is partially navigated or inactive\n• The script is executed in an untrusted or special context (e.g., test runners, browser extensions, or content previews)\nScroll position may not be preserved across navigation."));
		}
	}
	scrollToElement(el, options) {
		const rect = el.getBoundingClientRect();
		const left = rect.left + this.window.pageXOffset;
		const top = rect.top + this.window.pageYOffset;
		const offset = this.offset();
		this.window.scrollTo({
			...options,
			left: left - offset[0],
			top: top - offset[1]
		});
	}
};
function findAnchorFromDocument(document, target) {
	const documentResult = document.getElementById(target) || document.getElementsByName(target)[0];
	if (documentResult) return documentResult;
	if (typeof document.createTreeWalker === "function" && document.body && typeof document.body.attachShadow === "function") {
		const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
		let currentNode = treeWalker.currentNode;
		while (currentNode) {
			const shadowRoot = currentNode.shadowRoot;
			if (shadowRoot) {
				const result = shadowRoot.getElementById(target) || shadowRoot.querySelector(`[name="${CSS.escape(target)}"]`);
				if (result) return result;
			}
			currentNode = treeWalker.nextNode();
		}
	}
	return null;
}
function getUrl(src, win) {
	return isAbsoluteUrl(src) ? new URL(src) : new URL(src, win.location.href);
}
function isAbsoluteUrl(src) {
	return /^https?:\/\//.test(src);
}
function extractHostname(url) {
	return isAbsoluteUrl(url) ? new URL(url).hostname : url;
}
function escapeCssUrl(input) {
	return input.replace(/\\/g, "\\\\").replace(/[\n\r\f\0]/g, "").replace(/"/g, "\\\"");
}
var noopImageLoader = (config) => config.src;
var IMAGE_LOADER = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "ImageLoader" : "", { factory: () => noopImageLoader });
ngDevMode;
var cloudinaryLoaderInfo = {
	name: "Cloudinary",
	testUrl: isCloudinaryUrl
};
var CLOUDINARY_LOADER_REGEX = /https?\:\/\/[^\/]+\.cloudinary\.com\/.+/;
function isCloudinaryUrl(url) {
	return CLOUDINARY_LOADER_REGEX.test(url);
}
ngDevMode;
var imageKitLoaderInfo = {
	name: "ImageKit",
	testUrl: isImageKitUrl
};
var IMAGE_KIT_LOADER_REGEX = /https?\:\/\/[^\/]+\.imagekit\.io\/.+/;
function isImageKitUrl(url) {
	return IMAGE_KIT_LOADER_REGEX.test(url);
}
ngDevMode;
var imgixLoaderInfo = {
	name: "Imgix",
	testUrl: isImgixUrl
};
var IMGIX_LOADER_REGEX = /https?\:\/\/[^\/]+\.imgix\.net\/.+/;
function isImgixUrl(url) {
	return IMGIX_LOADER_REGEX.test(url);
}
ngDevMode;
var netlifyLoaderInfo = {
	name: "Netlify",
	testUrl: isNetlifyUrl
};
var NETLIFY_LOADER_REGEX = /https?\:\/\/[^\/]+\.netlify\.app\/.+/;
function isNetlifyUrl(url) {
	return NETLIFY_LOADER_REGEX.test(url);
}
function imgDirectiveDetails(ngSrc, includeNgSrc = true) {
	return `The NgOptimizedImage directive ${includeNgSrc ? `(activated on an <img> element with the \`ngSrc="${ngSrc}"\`) ` : ""}has detected that`;
}
function assertDevMode(checkName) {
	if (!ngDevMode) throw new RuntimeError(2958, `Unexpected invocation of the ${checkName} in the prod mode. Please make sure that the prod mode is enabled for production builds.`);
}
var LCPImageObserver = class LCPImageObserver {
	images = /* @__PURE__ */ new Map();
	window = inject(DOCUMENT).defaultView;
	observer = null;
	constructor() {
		assertDevMode("LCP checker");
		if (typeof PerformanceObserver !== "undefined") this.observer = this.initPerformanceObserver();
	}
	initPerformanceObserver() {
		const observer = new PerformanceObserver((entryList) => {
			const entries = entryList.getEntries();
			if (entries.length === 0) return;
			const imgSrc = entries[entries.length - 1].element?.src ?? "";
			if (imgSrc.startsWith("data:") || imgSrc.startsWith("blob:")) return;
			const img = this.images.get(imgSrc);
			if (!img) return;
			if (!img.priority && !img.alreadyWarnedPriority) {
				img.alreadyWarnedPriority = true;
				logMissingPriorityError(imgSrc);
			}
			if (img.modified && !img.alreadyWarnedModified) {
				img.alreadyWarnedModified = true;
				logModifiedWarning(imgSrc);
			}
		});
		observer.observe({
			type: "largest-contentful-paint",
			buffered: true
		});
		return observer;
	}
	registerImage(rewrittenSrc, isPriority) {
		if (!this.observer) return;
		const url = getUrl(rewrittenSrc, this.window).href;
		const existingState = this.images.get(url);
		if (existingState) {
			existingState.priority = existingState.priority || isPriority;
			existingState.count++;
		} else {
			const newObservedImageState = {
				priority: isPriority,
				modified: false,
				alreadyWarnedModified: false,
				alreadyWarnedPriority: false,
				count: 1
			};
			this.images.set(url, newObservedImageState);
		}
	}
	unregisterImage(rewrittenSrc) {
		if (!this.observer) return;
		const url = getUrl(rewrittenSrc, this.window).href;
		const existingState = this.images.get(url);
		if (existingState) {
			existingState.count--;
			if (existingState.count <= 0) this.images.delete(url);
		}
	}
	updateImage(originalSrc, newSrc) {
		if (!this.observer) return;
		const originalUrl = getUrl(originalSrc, this.window).href;
		const newUrl = getUrl(newSrc, this.window).href;
		if (originalUrl === newUrl) return;
		const originalState = this.images.get(originalUrl);
		if (!originalState) return;
		originalState.count--;
		if (originalState.count <= 0) this.images.delete(originalUrl);
		const newState = this.images.get(newUrl);
		if (newState) {
			newState.priority = newState.priority || originalState.priority;
			newState.modified = true;
			newState.alreadyWarnedPriority = newState.alreadyWarnedPriority || originalState.alreadyWarnedPriority;
			newState.alreadyWarnedModified = newState.alreadyWarnedModified || originalState.alreadyWarnedModified;
			newState.count++;
		} else this.images.set(newUrl, {
			priority: originalState.priority,
			modified: true,
			alreadyWarnedModified: originalState.alreadyWarnedModified,
			alreadyWarnedPriority: originalState.alreadyWarnedPriority,
			count: 1
		});
	}
	ngOnDestroy() {
		if (!this.observer) return;
		this.observer.disconnect();
		this.images.clear();
	}
	static ɵfac = function LCPImageObserver_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || LCPImageObserver)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineService({
		token: LCPImageObserver,
		factory: LCPImageObserver.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LCPImageObserver, [{ type: Service }], () => [], null);
})();
function logMissingPriorityError(ngSrc) {
	const directiveDetails = imgDirectiveDetails(ngSrc);
	console.error(formatRuntimeError(2955, `${directiveDetails} this image is the Largest Contentful Paint (LCP) element but was not marked "priority". This image should be marked "priority" in order to prioritize its loading. To fix this, add the "priority" attribute.`));
}
function logModifiedWarning(ngSrc) {
	const directiveDetails = imgDirectiveDetails(ngSrc);
	console.warn(formatRuntimeError(2964, `${directiveDetails} this image is the Largest Contentful Paint (LCP) element and has had its "ngSrc" attribute modified. This can cause slower loading performance. It is recommended not to modify the "ngSrc" property on any image which could be the LCP element.`));
}
var INTERNAL_PRECONNECT_CHECK_BLOCKLIST = /* @__PURE__ */ new Set([
	"localhost",
	"127.0.0.1",
	"0.0.0.0",
	"[::1]"
]);
var PRECONNECT_CHECK_BLOCKLIST = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "PRECONNECT_CHECK_BLOCKLIST" : "");
var PreconnectLinkChecker = class PreconnectLinkChecker {
	document = inject(DOCUMENT);
	preconnectLinks = null;
	alreadySeen = /* @__PURE__ */ new Set();
	window = this.document.defaultView;
	blocklist = new Set(INTERNAL_PRECONNECT_CHECK_BLOCKLIST);
	constructor() {
		assertDevMode("preconnect link checker");
		const blocklist = inject(PRECONNECT_CHECK_BLOCKLIST, { optional: true });
		if (blocklist) this.populateBlocklist(blocklist);
	}
	populateBlocklist(origins) {
		if (Array.isArray(origins)) deepForEach(origins, (origin) => {
			this.blocklist.add(extractHostname(origin));
		});
		else this.blocklist.add(extractHostname(origins));
	}
	assertPreconnect(rewrittenSrc, originalNgSrc) {
		const imgUrl = getUrl(rewrittenSrc, this.window);
		if (this.blocklist.has(imgUrl.hostname) || this.alreadySeen.has(imgUrl.origin)) return;
		this.alreadySeen.add(imgUrl.origin);
		this.preconnectLinks ??= this.queryPreconnectLinks();
		if (!this.preconnectLinks.has(imgUrl.origin)) console.warn(formatRuntimeError(2956, `${imgDirectiveDetails(originalNgSrc)} there is no preconnect tag present for this image. Preconnecting to the origin(s) that serve priority images ensures that these images are delivered as soon as possible. To fix this, please add the following element into the <head> of the document:\n  <link rel="preconnect" href="${imgUrl.origin}">`));
	}
	queryPreconnectLinks() {
		const preconnectUrls = /* @__PURE__ */ new Set();
		const links = this.document.querySelectorAll("link[rel=preconnect]");
		for (const link of links) {
			const url = getUrl(link.href, this.window);
			preconnectUrls.add(url.origin);
		}
		return preconnectUrls;
	}
	ngOnDestroy() {
		this.preconnectLinks?.clear();
		this.alreadySeen.clear();
	}
	static ɵfac = function PreconnectLinkChecker_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PreconnectLinkChecker)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineService({
		token: PreconnectLinkChecker,
		factory: PreconnectLinkChecker.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreconnectLinkChecker, [{ type: Service }], () => [], null);
})();
function deepForEach(input, fn) {
	for (let value of input) Array.isArray(value) ? deepForEach(value, fn) : fn(value);
}
var DEFAULT_PRELOADED_IMAGES_LIMIT = 5;
var PRELOADED_IMAGES = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "NG_OPTIMIZED_PRELOADED_IMAGES" : "", { factory: () => /* @__PURE__ */ new Set() });
var PreloadLinkCreator = class PreloadLinkCreator {
	preloadedImages = inject(PRELOADED_IMAGES);
	document = inject(DOCUMENT);
	errorShown = false;
	createPreloadLinkTag(renderer, src, srcset, sizes, crossOrigin) {
		const preloadKey = `${src}:${getCrossOriginMode(crossOrigin)}`;
		if (ngDevMode && !this.errorShown && this.preloadedImages.size >= DEFAULT_PRELOADED_IMAGES_LIMIT) {
			this.errorShown = true;
			console.warn(formatRuntimeError(2961, `The \`NgOptimizedImage\` directive has detected that more than ${DEFAULT_PRELOADED_IMAGES_LIMIT} images were marked as priority. This might negatively affect an overall performance of the page. To fix this, remove the "priority" attribute from images with less priority.`));
		}
		if (this.preloadedImages.has(preloadKey)) return;
		this.preloadedImages.add(preloadKey);
		const preload = renderer.createElement("link");
		renderer.setAttribute(preload, "as", "image");
		renderer.setAttribute(preload, "href", src);
		renderer.setAttribute(preload, "rel", "preload");
		renderer.setAttribute(preload, "fetchpriority", "high");
		if (crossOrigin != null) renderer.setAttribute(preload, "crossorigin", crossOrigin);
		if (sizes) renderer.setAttribute(preload, "imageSizes", sizes);
		if (srcset) renderer.setAttribute(preload, "imageSrcset", srcset);
		renderer.appendChild(this.document.head, preload);
	}
	static ɵfac = function PreloadLinkCreator_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PreloadLinkCreator)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineService({
		token: PreloadLinkCreator,
		factory: PreloadLinkCreator.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreloadLinkCreator, [{ type: Service }], null, null);
})();
function getCrossOriginMode(crossOrigin) {
	if (crossOrigin == null) return null;
	return crossOrigin.toLowerCase() === "use-credentials" ? "use-credentials" : "anonymous";
}
var BASE64_IMG_MAX_LENGTH_IN_ERROR = 50;
var VALID_WIDTH_DESCRIPTOR_SRCSET = /^((\s*\d+w\s*(,|$)){1,})$/;
var VALID_DENSITY_DESCRIPTOR_SRCSET = /^((\s*\d+(\.\d+)?x\s*(,|$)){1,})$/;
var ABSOLUTE_SRCSET_DENSITY_CAP = 3;
var RECOMMENDED_SRCSET_DENSITY_CAP = 2;
var DENSITY_SRCSET_MULTIPLIERS = [1, 2];
var VIEWPORT_BREAKPOINT_CUTOFF = 640;
var ASPECT_RATIO_TOLERANCE = .1;
var OVERSIZED_IMAGE_TOLERANCE = 1e3;
var FIXED_SRCSET_WIDTH_LIMIT = 1920;
var FIXED_SRCSET_HEIGHT_LIMIT = 1080;
var PLACEHOLDER_DIMENSION_LIMIT = 1e3;
var DATA_URL_WARN_LIMIT = 4e3;
var DATA_URL_ERROR_LIMIT = 1e4;
var BUILT_IN_LOADERS = [
	imgixLoaderInfo,
	imageKitLoaderInfo,
	cloudinaryLoaderInfo,
	netlifyLoaderInfo
];
var PRIORITY_COUNT_THRESHOLD = 10;
var IMGS_WITH_PRIORITY_ATTR_COUNT = 0;
var NgOptimizedImage = class NgOptimizedImage {
	imageLoader = inject(IMAGE_LOADER);
	config = processConfig(inject(IMAGE_CONFIG));
	renderer = inject(Renderer2);
	imgElement = inject(ElementRef).nativeElement;
	injector = inject(Injector);
	destroyRef = inject(DestroyRef);
	lcpObserver;
	_renderedSrc = null;
	ngSrc;
	ngSrcset;
	sizes;
	width;
	height;
	decoding;
	loading;
	priority = false;
	loaderParams;
	disableOptimizedSrcset = false;
	fill = false;
	placeholder;
	placeholderConfig;
	src;
	srcset;
	constructor() {
		if (ngDevMode) {
			this.lcpObserver = this.injector.get(LCPImageObserver);
			this.destroyRef.onDestroy(() => {
				if (!this.priority && this._renderedSrc !== null) this.lcpObserver.unregisterImage(this._renderedSrc);
			});
		}
		this.destroyRef.onDestroy(() => {
			this.renderer.removeAttribute(this.imgElement, "loading");
		});
	}
	ngOnInit() {
		performanceMarkFeature("NgOptimizedImage");
		if (ngDevMode) {
			const ngZone = this.injector.get(NgZone);
			assertNonEmptyInput(this, "ngSrc", this.ngSrc);
			assertValidNgSrcset(this, this.ngSrcset);
			assertNoConflictingSrc(this);
			if (this.ngSrcset) assertNoConflictingSrcset(this);
			assertNotBase64Image(this);
			assertNotBlobUrl(this);
			if (this.fill) {
				assertEmptyWidthAndHeight(this);
				ngZone.runOutsideAngular(() => assertNonZeroRenderedHeight(this, this.imgElement, this.renderer, this.destroyRef));
			} else {
				assertNonEmptyWidthAndHeight(this);
				if (this.height !== void 0) assertGreaterThanZero(this, this.height, "height");
				if (this.width !== void 0) assertGreaterThanZero(this, this.width, "width");
				ngZone.runOutsideAngular(() => assertNoImageDistortion(this, this.imgElement, this.renderer, this.destroyRef));
			}
			assertValidLoadingInput(this);
			assertValidDecodingInput(this);
			if (!this.ngSrcset) assertNoComplexSizes(this);
			assertValidPlaceholder(this, this.imageLoader);
			assertNotMissingBuiltInLoader(this.ngSrc, this.imageLoader);
			assertNoNgSrcsetWithoutLoader(this, this.imageLoader);
			assertNoLoaderParamsWithoutLoader(this, this.imageLoader);
			ngZone.runOutsideAngular(() => {
				this.lcpObserver.registerImage(this.getRewrittenSrc(), this.priority);
			});
			if (this.priority) {
				this.injector.get(PreconnectLinkChecker).assertPreconnect(this.getRewrittenSrc(), this.ngSrc);
				assetPriorityCountBelowThreshold(this.injector.get(ApplicationRef));
			}
		}
		if (this.placeholder) this.removePlaceholderOnLoad(this.imgElement);
		this.setHostAttributes();
	}
	setHostAttributes() {
		if (this.fill) this.sizes ||= "100vw";
		else {
			this.setHostAttribute("width", this.width.toString());
			this.setHostAttribute("height", this.height.toString());
		}
		this.setHostAttribute("loading", this.getLoadingBehavior());
		this.setHostAttribute("fetchpriority", this.getFetchPriority());
		this.setHostAttribute("decoding", this.getDecoding());
		this.setHostAttribute("ng-img", "true");
		this.updateSrcAndSrcset();
		if (this.sizes) if (this.getLoadingBehavior() === "lazy") this.setHostAttribute("sizes", "auto, " + this.sizes);
		else this.setHostAttribute("sizes", this.sizes);
		else if (this.ngSrcset && VALID_WIDTH_DESCRIPTOR_SRCSET.test(this.ngSrcset) && this.getLoadingBehavior() === "lazy") this.setHostAttribute("sizes", "auto, 100vw");
	}
	ngOnChanges(changes) {
		if (ngDevMode) assertNoPostInitInputChange(this, changes, [
			"ngSrcset",
			"width",
			"height",
			"priority",
			"fill",
			"loading",
			"sizes",
			"loaderParams",
			"disableOptimizedSrcset"
		]);
		if (changes["ngSrc"] && !changes["ngSrc"].isFirstChange()) {
			const oldSrc = this._renderedSrc;
			this.updateSrcAndSrcset(true);
			if (ngDevMode) {
				const newSrc = this._renderedSrc;
				if (oldSrc && newSrc && oldSrc !== newSrc) this.injector.get(NgZone).runOutsideAngular(() => {
					this.lcpObserver.updateImage(oldSrc, newSrc);
				});
			}
		}
		if (ngDevMode && changes["placeholder"]?.currentValue && true) assertPlaceholderDimensions(this, this.imgElement);
	}
	getAspectRatio() {
		if (this.width && this.height && this.height !== 0) return this.width / this.height;
		return null;
	}
	callImageLoader(configWithoutCustomParams) {
		let augmentedConfig = configWithoutCustomParams;
		if (this.loaderParams) augmentedConfig.loaderParams = this.loaderParams;
		const ratio = this.getAspectRatio();
		if (ratio !== null && augmentedConfig.width) augmentedConfig.height = Math.round(augmentedConfig.width / ratio);
		return this.imageLoader(augmentedConfig);
	}
	getLoadingBehavior() {
		if (!this.priority && this.loading !== void 0) return this.loading;
		return this.priority ? "eager" : "lazy";
	}
	getFetchPriority() {
		return this.priority ? "high" : "auto";
	}
	getDecoding() {
		if (this.priority) return "sync";
		return this.decoding ?? "auto";
	}
	getRewrittenSrc() {
		if (!this._renderedSrc) {
			const imgConfig = { src: this.ngSrc };
			this._renderedSrc = this.callImageLoader(imgConfig);
		}
		return this._renderedSrc;
	}
	getRewrittenSrcset() {
		const widthSrcSet = VALID_WIDTH_DESCRIPTOR_SRCSET.test(this.ngSrcset);
		return this.ngSrcset.split(",").filter((src) => src !== "").map((srcStr) => {
			srcStr = srcStr.trim();
			const width = widthSrcSet ? parseFloat(srcStr) : parseFloat(srcStr) * this.width;
			return `${this.callImageLoader({
				src: this.ngSrc,
				width
			})} ${srcStr}`;
		}).join(", ");
	}
	getAutomaticSrcset() {
		if (this.sizes) return this.getResponsiveSrcset();
		else return this.getFixedSrcset();
	}
	getResponsiveSrcset() {
		const { breakpoints } = this.config;
		let filteredBreakpoints = breakpoints;
		if (this.sizes?.trim() === "100vw") filteredBreakpoints = breakpoints.filter((bp) => bp >= VIEWPORT_BREAKPOINT_CUTOFF);
		return filteredBreakpoints.map((bp) => `${this.callImageLoader({
			src: this.ngSrc,
			width: bp
		})} ${bp}w`).join(", ");
	}
	updateSrcAndSrcset(forceSrcRecalc = false) {
		if (forceSrcRecalc) this._renderedSrc = null;
		const rewrittenSrc = this.getRewrittenSrc();
		this.setHostAttribute("src", rewrittenSrc);
		let rewrittenSrcset = void 0;
		if (this.ngSrcset) rewrittenSrcset = this.getRewrittenSrcset();
		else if (this.shouldGenerateAutomaticSrcset()) rewrittenSrcset = this.getAutomaticSrcset();
		if (rewrittenSrcset) this.setHostAttribute("srcset", rewrittenSrcset);
		return rewrittenSrcset;
	}
	getFixedSrcset() {
		return DENSITY_SRCSET_MULTIPLIERS.map((multiplier) => `${this.callImageLoader({
			src: this.ngSrc,
			width: this.width * multiplier
		})} ${multiplier}x`).join(", ");
	}
	shouldGenerateAutomaticSrcset() {
		let oversizedImage = false;
		if (!this.sizes) oversizedImage = this.width > FIXED_SRCSET_WIDTH_LIMIT || this.height > FIXED_SRCSET_HEIGHT_LIMIT;
		return !this.disableOptimizedSrcset && !this.srcset && this.imageLoader !== noopImageLoader && !oversizedImage;
	}
	generatePlaceholder(placeholderInput) {
		const { placeholderResolution } = this.config;
		if (placeholderInput === true) return `url("${escapeCssUrl(this.callImageLoader({
			src: this.ngSrc,
			width: placeholderResolution,
			isPlaceholder: true
		}))}")`;
		else if (typeof placeholderInput === "string") return `url("${escapeCssUrl(placeholderInput)}")`;
		return null;
	}
	shouldBlurPlaceholder(placeholderConfig) {
		if (!placeholderConfig || !placeholderConfig.hasOwnProperty("blur")) return true;
		return Boolean(placeholderConfig.blur);
	}
	removePlaceholderOnLoad(img) {
		const callback = () => {
			const changeDetectorRef = this.injector.get(ChangeDetectorRef);
			removeLoadListenerFn();
			removeErrorListenerFn();
			this.placeholder = false;
			changeDetectorRef.markForCheck();
		};
		const removeLoadListenerFn = this.renderer.listen(img, "load", callback);
		const removeErrorListenerFn = this.renderer.listen(img, "error", callback);
		this.destroyRef.onDestroy(() => {
			removeLoadListenerFn();
			removeErrorListenerFn();
		});
		callOnLoadIfImageIsLoaded(img, callback);
	}
	setHostAttribute(name, value) {
		this.renderer.setAttribute(this.imgElement, name, value);
	}
	static ɵfac = function NgOptimizedImage_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgOptimizedImage)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: NgOptimizedImage,
		selectors: [[
			"img",
			"ngSrc",
			""
		]],
		hostVars: 18,
		hostBindings: function NgOptimizedImage_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵstyleProp("position", ctx.fill ? "absolute" : null)("width", ctx.fill ? "100%" : null)("height", ctx.fill ? "100%" : null)("inset", ctx.fill ? "0" : null)("background-size", ctx.placeholder ? "cover" : null)("background-position", ctx.placeholder ? "50% 50%" : null)("background-repeat", ctx.placeholder ? "no-repeat" : null)("background-image", ctx.placeholder ? ctx.generatePlaceholder(ctx.placeholder) : null)("filter", ctx.placeholder && ctx.shouldBlurPlaceholder(ctx.placeholderConfig) ? "blur(15px)" : null);
		},
		inputs: {
			ngSrc: [
				2,
				"ngSrc",
				"ngSrc",
				unwrapSafeUrl
			],
			ngSrcset: "ngSrcset",
			sizes: "sizes",
			width: [
				2,
				"width",
				"width",
				numberAttribute
			],
			height: [
				2,
				"height",
				"height",
				numberAttribute
			],
			decoding: "decoding",
			loading: "loading",
			priority: [
				2,
				"priority",
				"priority",
				booleanAttribute
			],
			loaderParams: "loaderParams",
			disableOptimizedSrcset: [
				2,
				"disableOptimizedSrcset",
				"disableOptimizedSrcset",
				booleanAttribute
			],
			fill: [
				2,
				"fill",
				"fill",
				booleanAttribute
			],
			placeholder: [
				2,
				"placeholder",
				"placeholder",
				booleanOrUrlAttribute
			],
			placeholderConfig: "placeholderConfig",
			src: "src",
			srcset: "srcset"
		},
		features: [ɵɵNgOnChangesFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOptimizedImage, [{
		type: Directive,
		args: [{
			selector: "img[ngSrc]",
			host: {
				"[style.position]": "fill ? \"absolute\" : null",
				"[style.width]": "fill ? \"100%\" : null",
				"[style.height]": "fill ? \"100%\" : null",
				"[style.inset]": "fill ? \"0\" : null",
				"[style.background-size]": "placeholder ? \"cover\" : null",
				"[style.background-position]": "placeholder ? \"50% 50%\" : null",
				"[style.background-repeat]": "placeholder ? \"no-repeat\" : null",
				"[style.background-image]": "placeholder ? generatePlaceholder(placeholder) : null",
				"[style.filter]": "placeholder && shouldBlurPlaceholder(placeholderConfig) ? \"blur(15px)\" : null"
			}
		}]
	}], () => [], {
		ngSrc: [{
			type: Input,
			args: [{
				required: true,
				transform: unwrapSafeUrl
			}]
		}],
		ngSrcset: [{ type: Input }],
		sizes: [{ type: Input }],
		width: [{
			type: Input,
			args: [{ transform: numberAttribute }]
		}],
		height: [{
			type: Input,
			args: [{ transform: numberAttribute }]
		}],
		decoding: [{ type: Input }],
		loading: [{ type: Input }],
		priority: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		loaderParams: [{ type: Input }],
		disableOptimizedSrcset: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		fill: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		placeholder: [{
			type: Input,
			args: [{ transform: booleanOrUrlAttribute }]
		}],
		placeholderConfig: [{ type: Input }],
		src: [{ type: Input }],
		srcset: [{ type: Input }]
	});
})();
function processConfig(config) {
	let sortedBreakpoints = {};
	if (config.breakpoints) sortedBreakpoints.breakpoints = config.breakpoints.sort((a, b) => a - b);
	return Object.assign({}, IMAGE_CONFIG_DEFAULTS, config, sortedBreakpoints);
}
function assertNoConflictingSrc(dir) {
	if (dir.src) throw new RuntimeError(2950, `${imgDirectiveDetails(dir.ngSrc)} both \`src\` and \`ngSrc\` have been set. Supplying both of these attributes breaks lazy loading. The NgOptimizedImage directive sets \`src\` itself based on the value of \`ngSrc\`. To fix this, please remove the \`src\` attribute.`);
}
function assertNoConflictingSrcset(dir) {
	if (dir.srcset) throw new RuntimeError(2951, `${imgDirectiveDetails(dir.ngSrc)} both \`srcset\` and \`ngSrcset\` have been set. Supplying both of these attributes breaks lazy loading. The NgOptimizedImage directive sets \`srcset\` itself based on the value of \`ngSrcset\`. To fix this, please remove the \`srcset\` attribute.`);
}
function assertNotBase64Image(dir) {
	let ngSrc = dir.ngSrc.trim();
	if (ngSrc.startsWith("data:")) {
		if (ngSrc.length > BASE64_IMG_MAX_LENGTH_IN_ERROR) ngSrc = ngSrc.substring(0, BASE64_IMG_MAX_LENGTH_IN_ERROR) + "...";
		throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`ngSrc\` is a Base64-encoded string (${ngSrc}). NgOptimizedImage does not support Base64-encoded strings. To fix this, disable the NgOptimizedImage directive for this element by removing \`ngSrc\` and using a standard \`src\` attribute instead.`);
	}
}
function assertNoComplexSizes(dir) {
	if (dir.sizes?.match(/((\)|,)\s|^)\d+px/)) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`sizes\` was set to a string including pixel values. For automatic \`srcset\` generation, \`sizes\` must only include responsive values, such as \`sizes="50vw"\` or \`sizes="(min-width: 768px) 50vw, 100vw"\`. To fix this, modify the \`sizes\` attribute, or provide your own \`ngSrcset\` value directly.`);
}
function assertValidPlaceholder(dir, imageLoader) {
	assertNoPlaceholderConfigWithoutPlaceholder(dir);
	assertNoRelativePlaceholderWithoutLoader(dir, imageLoader);
	assertNoOversizedDataUrl(dir);
}
function assertNoPlaceholderConfigWithoutPlaceholder(dir) {
	if (dir.placeholderConfig && !dir.placeholder) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`placeholderConfig\` options were provided for an image that does not use the \`placeholder\` attribute, and will have no effect.`);
}
function assertNoRelativePlaceholderWithoutLoader(dir, imageLoader) {
	if (dir.placeholder === true && imageLoader === noopImageLoader) throw new RuntimeError(2963, `${imgDirectiveDetails(dir.ngSrc)} the \`placeholder\` attribute is set to true but no image loader is configured (i.e. the default one is being used), which would result in the same image being used for the primary image and its placeholder. To fix this, provide a loader or remove the \`placeholder\` attribute from the image.`);
}
function assertNoOversizedDataUrl(dir) {
	if (dir.placeholder && typeof dir.placeholder === "string" && dir.placeholder.startsWith("data:")) {
		if (dir.placeholder.length > DATA_URL_ERROR_LIMIT) throw new RuntimeError(2965, `${imgDirectiveDetails(dir.ngSrc)} the \`placeholder\` attribute is set to a data URL which is longer than ${DATA_URL_ERROR_LIMIT} characters. This is strongly discouraged, as large inline placeholders directly increase the bundle size of Angular and hurt page load performance. To fix this, generate a smaller data URL placeholder.`);
		if (dir.placeholder.length > DATA_URL_WARN_LIMIT) console.warn(formatRuntimeError(2965, `${imgDirectiveDetails(dir.ngSrc)} the \`placeholder\` attribute is set to a data URL which is longer than ${DATA_URL_WARN_LIMIT} characters. This is discouraged, as large inline placeholders directly increase the bundle size of Angular and hurt page load performance. For better loading performance, generate a smaller data URL placeholder.`));
	}
}
function assertNotBlobUrl(dir) {
	const ngSrc = dir.ngSrc.trim();
	if (ngSrc.startsWith("blob:")) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`ngSrc\` was set to a blob URL (${ngSrc}). Blob URLs are not supported by the NgOptimizedImage directive. To fix this, disable the NgOptimizedImage directive for this element by removing \`ngSrc\` and using a regular \`src\` attribute instead.`);
}
function assertNonEmptyInput(dir, name, value) {
	const isString = typeof value === "string";
	const isEmptyString = isString && value.trim() === "";
	if (!isString || isEmptyString) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`${name}\` has an invalid value (\`${value}\`). To fix this, change the value to a non-empty string.`);
}
function assertValidNgSrcset(dir, value) {
	if (value == null) return;
	assertNonEmptyInput(dir, "ngSrcset", value);
	const stringVal = value;
	const isValidWidthDescriptor = VALID_WIDTH_DESCRIPTOR_SRCSET.test(stringVal);
	const isValidDensityDescriptor = VALID_DENSITY_DESCRIPTOR_SRCSET.test(stringVal);
	if (isValidDensityDescriptor) assertUnderDensityCap(dir, stringVal);
	if (!(isValidWidthDescriptor || isValidDensityDescriptor)) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`ngSrcset\` has an invalid value (\`${value}\`). To fix this, supply \`ngSrcset\` using a comma-separated list of one or more width descriptors (e.g. "100w, 200w") or density descriptors (e.g. "1x, 2x").`);
}
function assertUnderDensityCap(dir, value) {
	if (!value.split(",").every((num) => num === "" || parseFloat(num) <= ABSOLUTE_SRCSET_DENSITY_CAP)) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`ngSrcset\` contains an unsupported image density:\`${value}\`. NgOptimizedImage generally recommends a max image density of ${RECOMMENDED_SRCSET_DENSITY_CAP}x but supports image densities up to ${ABSOLUTE_SRCSET_DENSITY_CAP}x. The human eye cannot distinguish between image densities greater than ${RECOMMENDED_SRCSET_DENSITY_CAP}x - which makes them unnecessary for most use cases. Images that will be pinch-zoomed are typically the primary use case for ${ABSOLUTE_SRCSET_DENSITY_CAP}x images. Please remove the high density descriptor and try again.`);
}
function postInitInputChangeError(dir, inputName) {
	let reason;
	if (inputName === "width" || inputName === "height") reason = `Changing \`${inputName}\` may result in different attribute value applied to the underlying image element and cause layout shifts on a page.`;
	else reason = `Changing the \`${inputName}\` would have no effect on the underlying image element, because the resource loading has already occurred.`;
	return new RuntimeError(2953, `${imgDirectiveDetails(dir.ngSrc)} \`${inputName}\` was updated after initialization. The NgOptimizedImage directive will not react to this input change. ${reason} To fix this, either switch \`${inputName}\` to a static value or wrap the image element in an @if that is gated on the necessary value.`);
}
function assertNoPostInitInputChange(dir, changes, inputs) {
	inputs.forEach((input) => {
		if (changes.hasOwnProperty(input) && !changes[input].isFirstChange()) {
			if (input === "ngSrc") dir = { ngSrc: changes[input].previousValue };
			throw postInitInputChangeError(dir, input);
		}
	});
}
function assertGreaterThanZero(dir, inputValue, inputName) {
	const validNumber = typeof inputValue === "number" && inputValue > 0;
	const validString = typeof inputValue === "string" && /^\d+$/.test(inputValue.trim()) && parseInt(inputValue) > 0;
	if (!validNumber && !validString) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`${inputName}\` has an invalid value. To fix this, provide \`${inputName}\` as a number greater than 0.`);
}
function assertNoImageDistortion(dir, img, renderer, destroyRef) {
	const callback = () => {
		removeLoadListenerFn();
		removeErrorListenerFn();
		const computedStyle = window.getComputedStyle(img);
		let renderedWidth = parseFloat(computedStyle.getPropertyValue("width"));
		let renderedHeight = parseFloat(computedStyle.getPropertyValue("height"));
		if (computedStyle.getPropertyValue("box-sizing") === "border-box") {
			const paddingTop = computedStyle.getPropertyValue("padding-top");
			const paddingRight = computedStyle.getPropertyValue("padding-right");
			const paddingBottom = computedStyle.getPropertyValue("padding-bottom");
			const paddingLeft = computedStyle.getPropertyValue("padding-left");
			renderedWidth -= parseFloat(paddingRight) + parseFloat(paddingLeft);
			renderedHeight -= parseFloat(paddingTop) + parseFloat(paddingBottom);
		}
		const renderedAspectRatio = renderedWidth / renderedHeight;
		const nonZeroRenderedDimensions = renderedWidth !== 0 && renderedHeight !== 0;
		const intrinsicWidth = img.naturalWidth;
		const intrinsicHeight = img.naturalHeight;
		const intrinsicAspectRatio = intrinsicWidth / intrinsicHeight;
		const suppliedWidth = dir.width;
		const suppliedHeight = dir.height;
		const suppliedAspectRatio = suppliedWidth / suppliedHeight;
		const inaccurateDimensions = Math.abs(suppliedAspectRatio - intrinsicAspectRatio) > ASPECT_RATIO_TOLERANCE;
		const stylingDistortion = nonZeroRenderedDimensions && Math.abs(intrinsicAspectRatio - renderedAspectRatio) > ASPECT_RATIO_TOLERANCE;
		if (inaccurateDimensions) console.warn(formatRuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the aspect ratio of the image does not match the aspect ratio indicated by the width and height attributes. \nIntrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h (aspect-ratio: ${round(intrinsicAspectRatio)}). \nSupplied width and height attributes: ${suppliedWidth}w x ${suppliedHeight}h (aspect-ratio: ${round(suppliedAspectRatio)}). \nTo fix this, update the width and height attributes.`));
		else if (stylingDistortion) console.warn(formatRuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the aspect ratio of the rendered image does not match the image's intrinsic aspect ratio. \nIntrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h (aspect-ratio: ${round(intrinsicAspectRatio)}). \nRendered image size: ${renderedWidth}w x ${renderedHeight}h (aspect-ratio: ${round(renderedAspectRatio)}). \nThis issue can occur if "width" and "height" attributes are added to an image without updating the corresponding image styling. To fix this, adjust image styling. In most cases, adding "height: auto" or "width: auto" to the image styling will fix this issue.`));
		else if (!dir.ngSrcset && nonZeroRenderedDimensions) {
			const recommendedWidth = RECOMMENDED_SRCSET_DENSITY_CAP * renderedWidth;
			const recommendedHeight = RECOMMENDED_SRCSET_DENSITY_CAP * renderedHeight;
			const oversizedWidth = intrinsicWidth - recommendedWidth >= OVERSIZED_IMAGE_TOLERANCE;
			const oversizedHeight = intrinsicHeight - recommendedHeight >= OVERSIZED_IMAGE_TOLERANCE;
			if (oversizedWidth || oversizedHeight) console.warn(formatRuntimeError(2960, `${imgDirectiveDetails(dir.ngSrc)} the intrinsic image is significantly larger than necessary. \nRendered image size: ${renderedWidth}w x ${renderedHeight}h. \nIntrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h. \nRecommended intrinsic image size: ${recommendedWidth}w x ${recommendedHeight}h. \nNote: Recommended intrinsic image size is calculated assuming a maximum DPR of ${RECOMMENDED_SRCSET_DENSITY_CAP}. To improve loading time, resize the image or consider using the "ngSrcset" and "sizes" attributes.`));
		}
	};
	const removeLoadListenerFn = renderer.listen(img, "load", callback);
	const removeErrorListenerFn = renderer.listen(img, "error", () => {
		removeLoadListenerFn();
		removeErrorListenerFn();
	});
	destroyRef.onDestroy(() => {
		removeLoadListenerFn();
		removeErrorListenerFn();
	});
	callOnLoadIfImageIsLoaded(img, callback);
}
function assertNonEmptyWidthAndHeight(dir) {
	let missingAttributes = [];
	if (dir.width === void 0) missingAttributes.push("width");
	if (dir.height === void 0) missingAttributes.push("height");
	if (missingAttributes.length > 0) throw new RuntimeError(2954, `${imgDirectiveDetails(dir.ngSrc)} these required attributes are missing: ${missingAttributes.map((attr) => `"${attr}"`).join(", ")}. Including "width" and "height" attributes will prevent image-related layout shifts. To fix this, include "width" and "height" attributes on the image tag or turn on "fill" mode with the \`fill\` attribute.`);
}
function assertEmptyWidthAndHeight(dir) {
	if (dir.width || dir.height) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the attributes \`height\` and/or \`width\` are present along with the \`fill\` attribute. Because \`fill\` mode causes an image to fill its containing element, the size attributes have no effect and should be removed.`);
}
function assertNonZeroRenderedHeight(dir, img, renderer, destroyRef) {
	const callback = () => {
		removeLoadListenerFn();
		removeErrorListenerFn();
		const renderedHeight = img.clientHeight;
		if (dir.fill && renderedHeight === 0) console.warn(formatRuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the height of the fill-mode image is zero. This is likely because the containing element does not have the CSS 'position' property set to one of the following: "relative", "fixed", or "absolute". To fix this problem, make sure the container element has the CSS 'position' property defined and the height of the element is not zero.`));
	};
	const removeLoadListenerFn = renderer.listen(img, "load", callback);
	const removeErrorListenerFn = renderer.listen(img, "error", () => {
		removeLoadListenerFn();
		removeErrorListenerFn();
	});
	destroyRef.onDestroy(() => {
		removeLoadListenerFn();
		removeErrorListenerFn();
	});
	callOnLoadIfImageIsLoaded(img, callback);
}
function assertValidLoadingInput(dir) {
	if (dir.loading && dir.priority) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`loading\` attribute was used on an image that was marked "priority". Setting \`loading\` on priority images is not allowed because these images will always be eagerly loaded. To fix this, remove the “loading” attribute from the priority image.`);
	if (typeof dir.loading === "string" && ![
		"auto",
		"eager",
		"lazy"
	].includes(dir.loading)) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`loading\` attribute has an invalid value (\`${dir.loading}\`). To fix this, provide a valid value ("lazy", "eager", or "auto").`);
}
function assertValidDecodingInput(dir) {
	if (typeof dir.decoding === "string" && ![
		"sync",
		"async",
		"auto"
	].includes(dir.decoding)) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`decoding\` attribute has an invalid value (\`${dir.decoding}\`). To fix this, provide a valid value ("sync", "async", or "auto").`);
}
function assertNotMissingBuiltInLoader(ngSrc, imageLoader) {
	if (imageLoader === noopImageLoader) {
		let builtInLoaderName = "";
		for (const loader of BUILT_IN_LOADERS) if (loader.testUrl(ngSrc)) {
			builtInLoaderName = loader.name;
			break;
		}
		if (builtInLoaderName) console.warn(formatRuntimeError(2962, `NgOptimizedImage: It looks like your images may be hosted on the ${builtInLoaderName} CDN, but your app is not using Angular's built-in loader for that CDN. We recommend switching to use the built-in by calling \`provide${builtInLoaderName}Loader()\` in your \`providers\` and passing it your instance's base URL. If you don't want to use the built-in loader, define a custom loader function using IMAGE_LOADER to silence this warning.`));
	}
}
function assertNoNgSrcsetWithoutLoader(dir, imageLoader) {
	if (dir.ngSrcset && imageLoader === noopImageLoader) console.warn(formatRuntimeError(2963, `${imgDirectiveDetails(dir.ngSrc)} the \`ngSrcset\` attribute is present but no image loader is configured (i.e. the default one is being used), which would result in the same image being used for all configured sizes. To fix this, provide a loader or remove the \`ngSrcset\` attribute from the image.`));
}
function assertNoLoaderParamsWithoutLoader(dir, imageLoader) {
	if (dir.loaderParams && imageLoader === noopImageLoader) console.warn(formatRuntimeError(2963, `${imgDirectiveDetails(dir.ngSrc)} the \`loaderParams\` attribute is present but no image loader is configured (i.e. the default one is being used), which means that the loaderParams data will not be consumed and will not affect the URL. To fix this, provide a custom loader or remove the \`loaderParams\` attribute from the image.`));
}
async function assetPriorityCountBelowThreshold(appRef) {
	if (IMGS_WITH_PRIORITY_ATTR_COUNT === 0) {
		IMGS_WITH_PRIORITY_ATTR_COUNT++;
		await appRef.whenStable();
		if (IMGS_WITH_PRIORITY_ATTR_COUNT > PRIORITY_COUNT_THRESHOLD) console.warn(formatRuntimeError(2966, `NgOptimizedImage: The "priority" attribute is set to true more than ${PRIORITY_COUNT_THRESHOLD} times (${IMGS_WITH_PRIORITY_ATTR_COUNT} times). Marking too many images as "high" priority can hurt your application's LCP (https://web.dev/lcp). "Priority" should only be set on the image expected to be the page's LCP element.`));
	} else IMGS_WITH_PRIORITY_ATTR_COUNT++;
}
function assertPlaceholderDimensions(dir, imgElement) {
	const computedStyle = window.getComputedStyle(imgElement);
	let renderedWidth = parseFloat(computedStyle.getPropertyValue("width"));
	let renderedHeight = parseFloat(computedStyle.getPropertyValue("height"));
	if (renderedWidth > PLACEHOLDER_DIMENSION_LIMIT || renderedHeight > PLACEHOLDER_DIMENSION_LIMIT) console.warn(formatRuntimeError(2967, `${imgDirectiveDetails(dir.ngSrc)} it uses a placeholder image, but at least one of the dimensions attribute (height or width) exceeds the limit of ${PLACEHOLDER_DIMENSION_LIMIT}px. To fix this, use a smaller image as a placeholder.`));
}
function callOnLoadIfImageIsLoaded(img, callback) {
	if (img.complete && img.naturalWidth) callback();
}
function round(input) {
	return Number.isInteger(input) ? input : input.toFixed(2);
}
function unwrapSafeUrl(value) {
	if (typeof value === "string") return value;
	return unwrapSafeValue(value);
}
function booleanOrUrlAttribute(value) {
	if (typeof value === "string" && value !== "true" && value !== "false" && value !== "") return value;
	return booleanAttribute(value);
}
//#endregion
export { from as _, PlatformNavigation as a, popResultSelector as b, LocationStrategy as c, normalizeQueryParams as d, DomAdapter as f, setRootDomAdapter as g, getDOM as h, PRECOMMIT_HANDLER_SUPPORTED as i, PathLocationStrategy as l, PlatformLocation as m, PLATFORM_BROWSER_ID as n, APP_BASE_HREF as o, LOCATION_INITIALIZED as p, ViewportScroller as r, Location as s, NavigationAdapterForLocation as t, joinWithSlash as u, executeSchedule as v, popScheduler as x, innerFrom as y };
