const c=/^[0-9]+$/;const s=(new class{isAcceptable(s){return 5===s.length&&c.test(s)}}).isAcceptable("90045");console.log(`zip 90045: ${s}`);
